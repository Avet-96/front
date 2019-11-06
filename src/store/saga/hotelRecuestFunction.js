import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'
import {
	HOTEL_CREATE_FAIL,
	HOTEL_CREATE_REQUEST,
	HOTEL_CREATE_SUCCESS, HOTEL_DATA_UPDATE_FAIL,
	HOTEL_DATA_UPDATE_REQUEST, HOTEL_DATA_UPDATE_SUCCESS,
	HOTEL_DELETE_FAIL,
	HOTEL_DELETE_REQUEST,
	HOTEL_DELETE_SUCCESS,
	HOTEL_SET_FAIL,
	HOTEL_SET_REQUEST,
	HOTEL_SET_SUCCESS
} from "../actions/hotelRecuestFunction";


export default function* watcher() {
	yield takeLatest(HOTEL_CREATE_REQUEST, createHotelRequest);
	yield takeLatest(HOTEL_SET_REQUEST, setHotelRequest);
	yield takeLatest(HOTEL_DELETE_REQUEST, deleteHotelRequest);
	yield takeLatest(HOTEL_DATA_UPDATE_REQUEST, updateHotelDataFunction)
}

export function* createHotelRequest(action) {
	try {

		const {data} = yield call(Api.addHotels, action.payload.data);
		yield put({
			type: HOTEL_CREATE_SUCCESS,
			payload: {data}
		})
	} catch (e) {
		yield put({
			type: HOTEL_CREATE_FAIL,
			mesage: e.mesage
		})
	}
}

export function* setHotelRequest(action) {
	try {
		const  {data} = yield call(Api.setHotels, action.payload.data);
		yield put({
			type:HOTEL_SET_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type: HOTEL_SET_FAIL,
			mesage: e.mesage
		})
	}
}

export function* deleteHotelRequest(action) {
	try {
		const {data} = yield call(Api.deleteHotel, action.payload.id);
		yield put({
			type:HOTEL_DELETE_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type: HOTEL_DELETE_FAIL,
			message:e.message,
		})
	}
}

export function* updateHotelDataFunction(action) {
	try {
		const {data} = yield call(Api.updateHotels, action.payload.data, action.payload.id);
		yield put({
			type:HOTEL_DATA_UPDATE_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type:HOTEL_DATA_UPDATE_FAIL,
			message:e.message
		})
	}
}

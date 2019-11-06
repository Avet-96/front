import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'
import {
	ADD_APARTMENT_FAIL,
	ADD_APARTMENT_REQUEST,
	ADD_APARTMENT_SUCCESS, DESTROY_ROOM_FAIL, DESTROY_ROOM_REQUEST, DESTROY_ROOM_SUCCESS, SET_ROOM_FAIL,
	SET_ROOM_REQUEST, SET_ROOM_SUCCESS, UPDATE_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS
} from "../actions/aportamentRecuestFunctions";

export default function* watcher() {
	yield takeLatest(ADD_APARTMENT_REQUEST, addApartmentRequest);
	yield takeLatest(SET_ROOM_REQUEST, setApartmentRequest);
	yield takeLatest(DESTROY_ROOM_REQUEST, destroyRoom);
	yield takeLatest(UPDATE_ROOM_REQUEST, updateRoomDatafunction);
}

export function* addApartmentRequest(action) {
	try {
		const {data} = yield call(Api.addRooms, action.payload.data);

		yield put({
			type: ADD_APARTMENT_SUCCESS,
			payload: {data}
		})
	} catch (e) {

		yield put({
			type: ADD_APARTMENT_FAIL,
			message: e.message
		})
	}
}

export function* setApartmentRequest(action) {

	try {
		const {data} = yield call(Api.setRooms, action.payload.data);
		yield put({
			type: SET_ROOM_SUCCESS,
			payload: {data}
		})

	} catch (e) {

		yield put({
			type: SET_ROOM_FAIL,
			message: e.message
		})
	}
}

export function* destroyRoom(action) {
	try {
		const {id} = action.payload;
		const {data} = yield call(Api.destroyRoom, id);
		yield put({
			type: DESTROY_ROOM_SUCCESS,
			payload: {data}
		})
	} catch (e) {
		yield put({
			type: DESTROY_ROOM_FAIL,
			message: e.message
		})

	}
}

export function* updateRoomDatafunction(action) {
	try {

		const {data} = yield call(Api.updateRoom, action.payload.data, action.payload.id);
		yield put({
			type: UPDATE_ROOM_SUCCESS,
			payload: {data}
		})

	} catch (e) {
		yield put({
			type: UPDATE_ROOM_FAIL,
			message: e.message
		})
	}
}

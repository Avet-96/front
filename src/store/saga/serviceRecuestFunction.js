import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'

import {
	SERVICE_CREATE_FAIL,
	SERVICE_CREATE_REQUEST,
	SERVICE_CREATE_SUCCESS, SERVICE_DELETE_FAIL, SERVICE_DELETE_REQUEST, SERVICE_DELETE_SUCCESS, SERVICE_SET_FAIL,
	SERVICE_SET_REQUEST, SERVICE_SET_SUCCESS, UPDATE_SERVICE_FAIL, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS
} from "../actions/serviceRecuestFunction";

export default function* watcher() {
	yield takeLatest(SERVICE_CREATE_REQUEST, createSrviceRequest);
	yield takeLatest(SERVICE_SET_REQUEST, setServiceRequest);
	yield takeLatest(SERVICE_DELETE_REQUEST, deletServiceData);
	yield takeLatest(UPDATE_SERVICE_REQUEST, updateService);
}

export function* createSrviceRequest(action) {
	try {
		const {data} = yield call(Api.addService, action.payload.name);
		yield put({
			type: SERVICE_CREATE_SUCCESS,
			payload: {data}
		})
	} catch (e) {
		yield put({
			type: SERVICE_CREATE_FAIL,
			message: e.message
		})
	}
}

export function* setServiceRequest(action) {
	try {
		const {data} = yield call(Api.setService, action.payload.data);
		yield put({
			type: SERVICE_SET_SUCCESS,
			payload: {data}
		})
	} catch (e) {
		yield put({
				type: SERVICE_SET_FAIL,
				message: e.message
			}
		)
	}
}

export function* deletServiceData(action) {
	try {
		const {name} = action.payload;
		const {data} = yield call(Api.deleteService, name);

		yield put({
			type: SERVICE_DELETE_SUCCESS,
			payload: {data}
		})
	} catch (e) {
		yield put({
			type: SERVICE_DELETE_FAIL,
			message: e.message
		})
	}
}

export function* updateService(action) {
	try {
		const {name,id} = action.payload
		const{data} = yield call(Api.updateService,name,id);

		yield put({
			type:UPDATE_SERVICE_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type:UPDATE_SERVICE_FAIL,
			message:e.message
		})
	}
}

import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'
import {
	LOGIN_FAIL,
	LOGIN_REQUEST, LOGIN_SUCCESS,
	REGISTRATION_FAIL,
	REGISTRATION_REQUEST,
	REGISTRATION_SUCCESS, USERS_FAIL, USERS_REQUEST, USERS_SUCCESS
} from "../actions/users";



export default function* watcher() {
	yield takeLatest(REGISTRATION_REQUEST, handleRegistration)
	yield takeLatest(LOGIN_REQUEST,hendelRegistration)
	yield takeLatest(USERS_REQUEST, hendelUsersData)
}
export  function* handleRegistration(action) {
	try {
		const { data } = yield call(Api.registration, action.payload.data);
		yield put({
			type:REGISTRATION_SUCCESS,
			payload: {data}
		})
	}catch (e) {
		yield put({
			type:REGISTRATION_FAIL,
			mesage:e.mesage
		})
	}
}

export  function* hendelRegistration(action) {
	try {
		const { email, password } = action.payload;
		const {data} = yield call(Api.login,email,password);


		yield put({
			type:LOGIN_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type:LOGIN_FAIL,
			mesage:e.mesage
		})
	}
}

export function* hendelUsersData(action) {
	try {
		const {data} = yield call(Api.userData)

		yield put({
			type:USERS_SUCCESS,
			payload: {data}
		})
	}catch (e) {
		yield put({
			type:USERS_FAIL,
			mesage:e.mesage
		})
	}
}

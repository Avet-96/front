export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';

export function registrationRequest(data) {
	return {
		type: REGISTRATION_REQUEST, payload: { data }
	}
}
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export  function loginUser(email,password) {
	return {
		type: LOGIN_REQUEST , payload: {email,password}
	}
}

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';


export function userRecuest() {
	return{
		type:USERS_REQUEST, payload:{}
	}
}

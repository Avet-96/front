export const ADD_APARTMENT_REQUEST = 'ADD_APARTMENT_REQUEST';
export const ADD_APARTMENT_SUCCESS = 'ADD_APARTMENT_SUCCESS';
export const ADD_APARTMENT_FAIL = 'ADD_APARTMENT_FAIL';

export function addApartment(data) {
	return {
		type: ADD_APARTMENT_REQUEST, payload: {data}
	}
}

export const SET_ROOM_REQUEST = 'SET_ROOM_REQUEST';
export const SET_ROOM_SUCCESS = 'SET_ROOM_SUCCESS';
export const SET_ROOM_FAIL = 'SET_ROOM_FAIL';

export function setApartmentFunction(data) {
	return {
		type: SET_ROOM_REQUEST, payload: {data}
	}
}

export const DESTROY_ROOM_REQUEST = 'DESTROY_ROOM_REQUEST';
export const DESTROY_ROOM_SUCCESS = 'DESTROY_ROOM_SUCCESS';
export const DESTROY_ROOM_FAIL = 'DESTROY_ROOM_FAIL';

export function destroyRoomFunction(id) {
	return {
		type: DESTROY_ROOM_REQUEST, payload: {id}
	}
}

export const UPDATE_ROOM_REQUEST = 'UPDATE_ROOM_REQUEST';
export const UPDATE_ROOM_SUCCESS = 'UPDATE_ROOM_SUCCESS';
export const UPDATE_ROOM_FAIL = 'UPDATE_ROOM_FAIL';

export function updateRoomFunction(data,id) {
	console.log(id);
	return{
		type:UPDATE_ROOM_REQUEST, payload:{data,id}
	}

}

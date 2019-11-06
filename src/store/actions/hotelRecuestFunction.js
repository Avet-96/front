export const HOTEL_CREATE_REQUEST = 'HOTEL_CREATE_REQUEST';
export const HOTEL_CREATE_SUCCESS = 'HOTEL_CREATE_SUCCESS';
export const HOTEL_CREATE_FAIL = 'HOTEL_CREATE_FAIL';

export function hotelRequest(data) {
	return {
		type: HOTEL_CREATE_REQUEST, payload: {data}
	}
}

export const HOTEL_SET_REQUEST = 'HOTEL_SET_REQUEST';
export const HOTEL_SET_SUCCESS = 'HOTEL_SET_SUCCESS';
export const HOTEL_SET_FAIL = 'HOTEL_SET_FAIL';

export function setHotels(data) {
	return {
		type: HOTEL_SET_REQUEST, payload: {data}
	}
}

export const HOTEL_DELETE_REQUEST = 'HOTEL_DELETE_REQUEST';
export const HOTEL_DELETE_SUCCESS = 'HOTEL_DELETE_SUCCESS';
export const HOTEL_DELETE_FAIL = 'HOTEL_DELETE_FAIL';

export function deleteHotels(id) {
	return {
		type: HOTEL_DELETE_REQUEST, payload: {id}
	}
}

export const HOTEL_DATA_UPDATE_REQUEST = 'HOTEL_DATA_UPDATE_REQUEST';
export const HOTEL_DATA_UPDATE_SUCCESS = 'HOTEL_DATA_UPDATE_SUCCESS';
export const HOTEL_DATA_UPDATE_FAIL = 'HOTEL_DATA_UPDATE_FAIL';

export function updateHotelData(data,id) {
	return {
		type:HOTEL_DATA_UPDATE_REQUEST, payload:{data,id}
	}
}

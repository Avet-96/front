export const SERVICE_CREATE_REQUEST = 'SERVICE_CREATE_REQUEST';
export const SERVICE_CREATE_SUCCESS = 'SERVICE_CREATE_SUCCESS';
export const SERVICE_CREATE_FAIL = 'SERVICE_CREATE_FAIL';

export function addSrviceNAme(name) {
	return {
		type: SERVICE_CREATE_REQUEST, payload: {name}
	}
}

export const SERVICE_SET_REQUEST = 'SERVICE_SET_REQUEST';
export const SERVICE_SET_SUCCESS = 'SERVICE_SET_SUCCESS';
export const SERVICE_SET_FAIL = 'SERVICE_SET_FAIL';

export function setService(data) {
	return{
		type:SERVICE_SET_REQUEST, payload:{data}
	}
}

export const SERVICE_DELETE_REQUEST='SERVICE_DELETE_REQUEST';
export const SERVICE_DELETE_SUCCESS = 'SERVICE_DELETE_SUCCESS';
export const SERVICE_DELETE_FAIL = 'SERVICE_DELETE_FAIL';


export function deletSservice(name) {
	console.log(name, 'name service request')
	return{
		type:SERVICE_DELETE_REQUEST, payload:{name}
	}
}

export const UPDATE_SERVICE_REQUEST='UPDATE_SERVICE_REQUEST';
export const UPDATE_SERVICE_SUCCESS='UPDATE_SERVICE_SUCCESS';
export const UPDATE_SERVICE_FAIL='UPDATE_SERVICE_FAIL';

export function updateServiceData(name,id) {
	return{
		type:UPDATE_SERVICE_REQUEST, payload:{name,id}
	}
}

import {SERVICE_CREATE_REQUEST, SERVICE_SET_SUCCESS,} from "../actions/serviceRecuestFunction";

const initialState = {
service:[]
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SERVICE_CREATE_REQUEST: {
			return {...state, }
		}
		case SERVICE_SET_SUCCESS:{
			let {data} =  action.payload

			console.log(data, 111)
			return {...state, service: data }
		}
		default: {
			return state
		}
	}
}

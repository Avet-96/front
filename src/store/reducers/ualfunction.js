import {URL_FUNCTION_REQUEST} from "../actions/ualfunction";


const initialState = {
	usersData: []
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case URL_FUNCTION_REQUEST: {
			return {...state, usersData: action.payload.data}
		}
		default: {
			return state
		}
	}
}

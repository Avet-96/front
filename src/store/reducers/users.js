import {LOGIN_SUCCESS} from "../actions/users";

const initialState = {
	usersData: []
};
export default function reducer(state = initialState, action) {

	switch (action.type) {
		case LOGIN_SUCCESS: {
			return {...state, usersData: action.payload.data}
		}
		default: {
			return state
		}
	}
}

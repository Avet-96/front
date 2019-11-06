import {SET_ROOM_SUCCESS} from "../actions/aportamentRecuestFunctions";


const initialState = {
	rooms: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_ROOM_SUCCESS: {
			return {...state, rooms: action.payload.data}
		}
		default: {
			return state
		}
	}
}

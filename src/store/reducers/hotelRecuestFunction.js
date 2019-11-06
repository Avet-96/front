
import { HOTEL_SET_SUCCESS} from "../actions/hotelRecuestFunction";


const initialState = {
	hotels: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case HOTEL_SET_SUCCESS: {
			return {...state, hotels: action.payload.data}
		}
		default: {
			return state
		}
	}
}

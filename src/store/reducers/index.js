import {combineReducers} from "redux";
import users from "./users";
import ualfunction from "./ualfunction";
import hotelRecuestFunction from "./hotelRecuestFunction";
import serviceRecuestFunction from "./serviceRecuestFunction";
import aportamentRecuestFunctions from "./aportamentRecuestFunctions";


export default combineReducers({
	users,
	ualfunction,
	hotelRecuestFunction,
	serviceRecuestFunction,
	aportamentRecuestFunctions
})

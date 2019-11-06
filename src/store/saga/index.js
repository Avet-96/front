import { fork, all } from 'redux-saga/effects'
import users from './users'
import hotelRecuestFunction from "./hotelRecuestFunction";
import serviceRecuestFunction from "./serviceRecuestFunction";
import aportamentRecuestFunctions from "./aportamentRecuestFunctions";
export default function* watchers() {
	yield all([
		fork(users),
		fork(hotelRecuestFunction),
		fork(serviceRecuestFunction),
		fork(aportamentRecuestFunctions)
	])
}

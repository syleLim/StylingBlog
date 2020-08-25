import { combineReducers } 	from "redux"
import { penderReducer }	from "redux-pender"

import Action from "./Action"

export default combineReducers({
	Action,
	pender : penderReducer
})
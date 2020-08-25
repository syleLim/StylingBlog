import { Map }							from "immutable"
import { handleActions, createAction }	from "redux-actions"
import axios 							from "axios"
import { pender }						from "redux-pender"

/*
Promise function Setting
Use axios or other async module

Example  Below:
*/
const actionAPI = () => {
	return axios.get("REQUEST PATH")
}


/*
Action Type and Action function Setting

Example Below:
*/
const ActionType = "ActionType"
export const actionFunction = createAction(ActionType, actionAPI);


/*
For init State in Store. Usually use ImmutableJs 

Example Below:
*/	
const initialState = Map({
	user : "no data",	
})

/*
This bind Action and Store
With 3 state(pending, sucecss, fail), control state
Save data in payload.data and other state in payload also.
state use function like react state

Example Blow:
*/
export default handleActions({	
	...pender({
		type		: ActionType,
		onSuccess	: (state, action) => {
			// Success Process
			// Example :
			const { user } = data.payload.data;
			return state.set("user", user); 
		},
		onPending	: (state, action) => {
			// Pending Process
			return state
		},
		onFailure	: (state, action) => {
			// Fail Process
			return state
		}
	})
}, initialState);

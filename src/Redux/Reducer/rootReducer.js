import { combineReducers } from 'redux';
import friendReducer from "./FriendReducer";
import postReducer from './postReducer';

const rootReducer = combineReducers({
	postReducer,   friend:friendReducer,
});
export default rootReducer;
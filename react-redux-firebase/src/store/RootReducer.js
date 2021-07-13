import { combineReducers } from "redux";
import StudentReducer from './reducers/StudentReducer';

const rootReducer = combineReducers({
    StudentReducer,
});

export default rootReducer;
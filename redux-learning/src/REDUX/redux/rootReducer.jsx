import { combineReducers } from "redux";
import studentReducer from './reducers/studentReducer';
import githubReducer from './reducers/githubReducer';

const rootReducer = combineReducers({
    studentReducer,
    githubReducer
});

export default rootReducer;
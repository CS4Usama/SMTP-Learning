import {LOGIN} from '../constants/Type';


let initialState = {
    error: '',
    students: []
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            console.log("Data in Reducer from Fetch Action", action.payload);
            // Work / Logic will be here...
            let newState = {
                ...state,
                students: action.payload
            }
            // return state;
            return newState;

        default:
            return state;
    }
}

export default AuthReducer;
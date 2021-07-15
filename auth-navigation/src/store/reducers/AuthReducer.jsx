import {LOGIN} from '../actions/AuthAction';


let initialState = {
    error: '',
    students: []
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            // If User Login then What ?
            return state;

        default:
            return state;
    }
}

export default AuthReducer;
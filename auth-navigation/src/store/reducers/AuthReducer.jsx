import {LOGIN} from '../actions/AuthAction';


let initialState = {
    isUserLoggedIn: false,
    user: {}
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            // If User Login then What ?
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            };

        default:
            return state;
    }
}

export default AuthReducer;
import { ERROR_GITHUB_FOLLOWER_API, GITHUB_FOLLOWER_API } from "../constants/type";

let initialState = {
    follower: [],
    err: ''
};

function githubReducer(state = initialState, action) {
    switch (action.type) {
        case GITHUB_FOLLOWER_API:
            // Work/Logic will be Here
            let newState = {
                ...state,
                follower: action.payload
            };
            return newState;

        case ERROR_GITHUB_FOLLOWER_API:
            // Work/Logic will be Here
            return {
                ...state,
                err: action.payload
            };
    
        default:
            return state;
    }
}

export default githubReducer;
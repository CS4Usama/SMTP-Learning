import { FETCH_STUDENT, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from "../constants/Type";

let initialState = {
    error: '',
    students: []
}

function StudentReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_STUDENT:
            console.log("Data in Reducer from Fetch Action", action.payload);
            // Work / Logic will be here...
            let newState = {
                ...state,
                students: action.payload
            }
            // return state;
            return newState;

            case ADD_STUDENT:
                // Work / Logic will be here...
                return {
                    ...state,
                    class: 'SMTP Web and Mobile Development',   //value updated
                    newData: action.payload
                }

            case UPDATE_STUDENT:
                // Work / Logic will be here...
                return {
                    ...state,
                    class: 'SMTP Web and Mobile Development',   //value updated
                    newData: action.payload
                }

            case DELETE_STUDENT:
                // Work / Logic will be here...
                let deleteState = {
                    ...state,
                    class: 'SMTP Web and Mobile Development',   //value updated
                    newData: action.payload
                }
                // return state;
                return deleteState;
    
        default:
            return state;
    }
}

export default StudentReducer;
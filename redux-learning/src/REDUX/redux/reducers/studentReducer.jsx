import { ADD_STUDENT } from "../constants/type";

let initialState = {
    name:"Usama",
    age: 21,
    class: "CS-4-C",
    students: []
}

function studentReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            // Work / Logic will be here...
            let newState = {
                ...state,
                class: 'SMTP Web and Mobile Development',   //value updated
                newData: action.payload
            }
            // return state;
            return newState;
    
        default:
            return state;
    }
}

export default studentReducer;
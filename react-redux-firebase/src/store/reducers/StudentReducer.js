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
                let newStudent = state.students;
                newStudent.push(action.payload)
                return {
                    ...state,
                    students: newStudent
                }

            case UPDATE_STUDENT:
                let updatedStudent = state.students.map((item) => {
                    if(action.payload.docID === item.docID) {
                        return {...action.payload.data, ...action.payload.docID};
                        // return action.payload.data;
                    } else {
                        return item;
                    }
                })
                return {
                    ...state,
                    students: updatedStudent
                }

            case DELETE_STUDENT:
                let filteredStudents = state.students.filter((item) => item.docID !== action.payload)
                // return state;
                return {
                    ...state,
                    students: filteredStudents
                };
    
        default:
            return state;
    }
}

export default StudentReducer;
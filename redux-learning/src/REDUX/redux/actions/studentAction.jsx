import { ADD_STUDENT } from "../constants/type"

// Action will receive data form React Components and pass to the Reducer.
export const addStudent = (data) => {
    return {
        type: ADD_STUDENT,
        payload: data
    }
}
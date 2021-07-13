import { FETCH_STUDENT, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from "../constants/Type";
import {db} from '../../config/Firebase';

// Fetch Students from Firebase Action
export const fetchStudents = (setLoading) => async(dispatch, previousState) => {
    try {
        setLoading(true);
        let snapshot = await db.collection('students').get();
        let students = [];
        snapshot.forEach((doc) => {
            students.push({
                docID: doc.id,
                ...doc.data()
            });
        })
        dispatch({
            type: FETCH_STUDENT,
            payload: students
        });
    }
    catch(err) {
        console.log("Exception is: ", err);
        alert(err);
        // dispatch({
        //     type: ERROR,
        //     payload: err
        // });
    }
    finally {
        setLoading(false);
    }
}
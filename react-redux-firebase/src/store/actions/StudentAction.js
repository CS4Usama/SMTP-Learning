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


// Add Student in Firebase Action
export const addStudent = (data, setLoading) => async(dispatch, previousState) => {
    try {
        setLoading(true);
        await db.collection('students').add(data);
        dispatch({
            type: ADD_STUDENT,
            payload: data
        });
    } catch(err) {
        console.log("Exception is: ", err);
        alert(err);
    } finally {
        setLoading(false);
    }
}


// Delete Student in Firebase Action
export const delStudent = (docID, setLoading) => async(dispatch, previousState) => {
    try {
        setLoading(true);
        await db.collection('students').doc(docID).delete();
        dispatch({
            type: DELETE_STUDENT,
            payload: docID
        });
    } catch(err) {
        console.log("Exception is: ", err);
        alert(err);
    } finally {
        setLoading(false);
    }
}


// Update Student in Firebase Action
export const updateStudent = (docID, data, setLoading) => async(dispatch, previousState) => {
    try {
        setLoading(true);
        await db.collection('students').doc(docID).update(data);
        dispatch({
            type: UPDATE_STUDENT,
            payload: {docID,data}
        });
    } catch(err) {
        console.log("Exception is: ", err);
        alert(err);
    } finally {
        setLoading(false);
    }
}
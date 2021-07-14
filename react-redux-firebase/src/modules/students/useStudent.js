import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, delStudent, fetchStudents, updateStudent } from "../../store/actions/StudentAction";



export function useStudent() {
    // const [student, setStudent] = useState([]);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState();
    const [stdClass, setStdClass] = useState("");
    const [batch, setBatch] = useState("");
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

    const dispatch = useDispatch();

    // Store Data || students collection exist in firebase firestore db
    const student = useSelector(state => state.StudentReducer.students);
    console.log("Students from studentReducer", student);
    // setStudent(students);
    // end of Store Data

    useEffect(() => {
        // Action Call for Fetching Students on Reload
        dispatch(fetchStudents(setLoading))
    }, [])

    const ctaHandler = () => {
        setMsg("");
        if(name !== "" && rollNo !== "" && stdClass !== "" && batch !== "") {
            let newStd = {
                name,
                rollNo,
                class: stdClass,
                batch,
                createdAt: new Date()
            }

            // Call Action to Add new Data in Firebase
            dispatch(addStudent(newStd, setSubmitLoading))
            setName("");
            setRollNo("");
            setStdClass("");
            setBatch("");
        }
        else {
            setMsg("Some Inputs are Empty! Inputs can't be Empty.")
        }
    }

    // let delHandler = (stdname) => {
    //     let delStd = student.filter((student) => {
    //         if(student.name !== stdname) {
    //             return student;
    //         }
    //     });
    //     setStudent([...delStd])
    // }

    let delHandler = (docID) => {
        dispatch(delStudent(docID, setLoading));
    }

    let updateHandler = (student) => {
        setUpdatedIndex(student.docID);
        setName(student.name);
        setRollNo(student.rollNo);
        setStdClass(student.class);
        setBatch(student.batch);
        setFlag(true);
    }

    let ctaUpdateHandler = () => {
        setMsg("");
        if(name !== "" && rollNo !== "" && stdClass !== "" && batch !== "") {
            let newStd = {
                name,
                rollNo,
                class: stdClass,
                batch
            }

            dispatch(updateStudent(updatedIndex, newStd, setLoading));

            // setStudent([...updateStudents])
            setName("");
            setRollNo("");
            setStdClass("");
            setBatch("");
            setFlag(false)
        }
        else {
            setMsg("Some Inputs are Empty! Inputs can't be Empty.")
        }
    }

    return [student, msg, name, rollNo, stdClass, batch, flag, loading, submitLoading, ctaHandler, delHandler, updateHandler, ctaUpdateHandler, setName, setRollNo, setStdClass, setBatch];
}
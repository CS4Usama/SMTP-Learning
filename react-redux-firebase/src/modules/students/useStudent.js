import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../store/actions/StudentAction";



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

    const dispatch = useDispatch();

    // Store Data
    const student = useSelector(state => state.StudentReducer.students);
    console.log("Students from studentReducer", student);
    // setStudent(students);
    // end of Store Data

    useEffect(() => {
        // Action Call for Fetching Students
        dispatch(fetchStudents(setLoading))
    }, [])

    // const ctaHandler = () => {
    //     setMsg("");
    //     if(name !== "" && rollNo !== "" && stdClass !== "" && batch !== "") {
    //         let newStd = {
    //             name,
    //             rollNo,
    //             class: stdClass,
    //             batch
    //         }
    //         // setStudent([...student, newStd])
    //         setName("");
    //         setRollNo("");
    //         setStdClass("");
    //         setBatch("");
    //     }
    //     else {
    //         setMsg("Some Inputs are Empty! Inputs can't be Empty.")
    //     }
    // }

    // let delHandler = (stdname) => {
    //     let delStd = student.filter((student) => {
    //         if(student.name !== stdname) {
    //             return student;
    //         }
    //     });
    //     setStudent([...delStd])
    // }

    // let delHandler = (index) => {
    //     let delStd = student.filter((student, i) => {
    //         if(i !== index) {
    //             return student;
    //         }
    //     });
    //     // setStudent([...delStd])
    // }

    // let updateHandler = (student, index) => {
    //     setUpdatedIndex(index);
    //     setName(student.name);
    //     setRollNo(student.rollNo);
    //     setStdClass(student.class);
    //     setBatch(student.batch);
    //     setFlag(true);
    // }

    // let ctaUpdateHandler = () => {
    //     setMsg("");
    //     if(name !== "" && rollNo !== "" && stdClass !== "" && batch !== "") {
    //         let newStd = {
    //             name,
    //             rollNo,
    //             class: stdClass,
    //             batch
    //         }

    //         let updateStudents = student.map((stud, index) => {
    //             if(updatedIndex === index) {
    //                 return newStd;
    //             } else {
    //                 return stud;
    //             }
    //         });

            // setStudent([...updateStudents])
        //     setName("");
        //     setRollNo("");
        //     setStdClass("");
        //     setBatch("");
        //     setFlag(false)
        // }
        // else {
        //     setMsg("Some Inputs are Empty! Inputs can't be Empty.")
        // }
    // }

    return [student, msg, name, rollNo, stdClass, batch, flag,  setName, setRollNo, setStdClass, setBatch];
}
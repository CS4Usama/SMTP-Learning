import {useState} from "react";
import {data} from "./Data";


export function useStudent() {
    const [student, setStudent] = useState(data);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState();
    const [stdClass, setStdClass] = useState("");
    const [batch, setBatch] = useState("");
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState("");

    const ctaHandler = () => {
        setMsg("");
        if(name !== "" && rollNo !== "" && stdClass !== "" && batch !== "") {
            let newStd = {
                name,
                rollNo,
                class: stdClass,
                batch
            }
            setStudent([...student, newStd])
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

    let delHandler = (index) => {
        let delStd = student.filter((student, i) => {
            if(i !== index) {
                return student;
            }
        });
        setStudent([...delStd])
    }

    let updateHandler = (student, index) => {
        setUpdatedIndex(index);
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

            let updateStudents = student.map((stud, index) => {
                if(updatedIndex === index) {
                    return newStd;
                } else {
                    return stud;
                }
            });

            setStudent([...updateStudents])
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

    return [student, msg, name, rollNo, stdClass, batch, flag, ctaHandler, delHandler, updateHandler, ctaUpdateHandler, setName, setRollNo, setStdClass, setBatch];
}
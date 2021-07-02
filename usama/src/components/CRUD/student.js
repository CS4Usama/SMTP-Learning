import {useState} from "react";
import {data} from "./data";

export default function Student() {
    
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



    return(
        <div>

            <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={rollNo} placeholder="Roll No" onChange={(e)=>setRollNo(e.target.value)} />
            <input type="text" value={stdClass} placeholder="Class" onChange={(e)=>setStdClass(e.target.value)} />
            <input type="text" value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />

            {
                flag ?
                    <button onClick={ctaUpdateHandler}>update</button>
                    :
                    <button onClick={ctaHandler}>ADD</button>

            }
            
            <p style={{backgroundColor:"red", color:"white"}}> {msg} </p>

            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                    <th>Batch</th>
                </tr>
                {
                    student.map((student, index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{student.name}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.class}</td>
                                <td>{student.batch}</td>
                                {/* <td> <button onClick={()=>delHandler(student.name)}>delete</button> </td> */}
                                <td> <button onClick={()=>delHandler(index)}>delete</button> </td>
                                <td> <button onClick={()=>updateHandler(student, index)}>update</button> </td>
                            </tr>
                        );
                    })
                }
            </table>


            
        
        </div>
    );
}
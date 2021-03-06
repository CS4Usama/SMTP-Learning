import {useStudent} from "./useStudent";


export default function Student() {

    const [student, msg, name, rollNo, stdClass, batch, flag, ctaHandler, delHandler, updateHandler, ctaUpdateHandler, setName, setRollNo, setStdClass, setBatch] = useStudent();
    
    return(
        <div>

            <h2>New Student Add</h2>
            <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="number" value={rollNo} placeholder="Roll No" onChange={(e)=>setRollNo(e.target.value)} />
            <input type="text" value={stdClass} placeholder="Class" onChange={(e)=>setStdClass(e.target.value)} />
            <input type="text" value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />

            {
                flag ?
                    <button onClick={ctaUpdateHandler}>update</button>
                    :
                    <button onClick={ctaHandler}>ADD</button>
            }

            <p style={{backgroundColor:"red", color:"white"}}> {msg} </p>
            <hr/>

            <h2>List of Students</h2>

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
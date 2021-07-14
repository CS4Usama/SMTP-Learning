import StudentList from "../../components/StudentList";
import {useStudent} from "./useStudent";


export default function Student() {

    const [student, msg, name, rollNo, stdClass, batch, flag, loading, submitLoading, ctaHandler, delHandler, updateHandler, ctaUpdateHandler, setName, setRollNo, setStdClass, setBatch] = useStudent();
    
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
                    <button onClick={ctaHandler}>{submitLoading ? 'loading...' : 'ADD'}</button>
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
                        return <StudentList index={index} student={student} delHandler={delHandler} updateHandler={updateHandler} />
                    })
                }

                {loading && <div>Loading...</div>}

            </table>
            
        </div>
    );
}
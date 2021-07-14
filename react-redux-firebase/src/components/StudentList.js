function StudentList({student, index, delHandler, updateHandler}) {
    return(
        <tr>
            <td>{index+1}</td>
            <td>{student.name}</td>
            <td>{student.rollNo}</td>
            <td>{student.class}</td>
            <td>{student.batch}</td>
            {/* <td> <button onClick={()=>delHandler(student.name)}>delete</button> </td> */}
            <td> <button onClick={()=>delHandler(student.docID)}>delete</button> </td>
            <td> <button onClick={()=>updateHandler(student, student.docID)}>update</button> </td>
        </tr>
    );
}

export default StudentList;
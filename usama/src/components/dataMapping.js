import React, {useState} from "react";

export default function DataMapping() {
    const [student,] = useState([
        {
          Name: "Usama",
          Roll: 123,
          Class: "CSS",
          Batch: 4
        },
        {
          Name: "Ali",
          Roll: 456,
          Class: "CSS",
          Batch: 4
        },
        {
          Name: "Cyber",
          Roll: 77,
          Class: "CSS",
          Batch: 4
        }
      ])
    console.log(student);
    
      return (
        <div>
          <table>
            <tr>
              <th>Student Name</th>
              <th>Student Roll No</th>
              <th>Student Class</th>
              <th>Student Batch</th>
            </tr>
            {
              student.map((student, index)=> {
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{student.Name}</td>
                    <td>{student.Roll}</td>
                    <td>{student.Class}</td>
                    <td>{student.Batch}</td>
                  </tr>
                );
              })
            }
          </table>
        </div>
      );
}
import {useCustomHook} from "./customHook";

export default function UserView() {

    const [student, setStudent] = useCustomHook();

    return(
        <div>
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
        </div>
    )
}
import {useState} from "react";

export function useCustomHook() {
    const [student, setStudent] = useState([
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
    
      return [student, setStudent]
}
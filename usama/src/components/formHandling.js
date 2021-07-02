import React, {useState} from "react";

function FormHandling() {
    const [name, setName] = useState("");
    const [cclass, setClass] = useState("");
    const [roll, setRoll] = useState("");
    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    let onSubmitHandler = () => {
        const obj = {
            Usama: name,
            cclass,
            Myroll: roll
        }
        console.log(obj);
    }

    return(
        <div>
            {/* <input type="text" placeholder="Name" name="U-Name" onChange={(e)=>setName(e.target.value)} /> */}
            <input type="text" placeholder="Name" name="U-Name" onChange={onChangeHandler} />
            <input type="text" placeholder="Class" name="U-Name" onChange={(e)=>setClass(e.target.value)} />
            <input type="text" placeholder="Roll" name="U-Name" onChange={(e)=>setRoll(e.target.value)} />
            <p>{name}</p>
            <p>{cclass}</p>
            <p>{roll}</p>
            <button onClick={onSubmitHandler}>Submit</button>
        </div>
    );
}

export default FormHandling;
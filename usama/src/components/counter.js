import React, {useState} from "react"

function Counter() {
    const [counter, newCoun] = useState(0);
    const inc = () => {
        newCoun(counter+1)
    }
    const dec = () => {
        newCoun(counter-1)
    }

    return (
        <div style={{padding:50}}>
            <button onclick={dec}> - </button>
            <span style={{padding:20}}>{counter}</span>
            <button onclick={inc}> + </button>
        </div>
    );
}

export default Counter;
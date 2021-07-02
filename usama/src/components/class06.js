import {useState} from "react";

function Class06() {

  const [array] = useState(["Ali Raza", "Usama", "Bakar"]);
  const [flag, setFlag] = useState(true);
  const [obj] = useState({model: "2020", color: "Black", engineNo: 123});

    return(
        <>
            <ul>
                {
                    array.map((name) => {
                        return(
                            <li> {name} </li>
                        );
                    })
                }
            </ul>

            {
                flag ?
                    <p>Usama</p>
                    :
                    <p>Hacker</p>
            }
            <button onClick={()=>setFlag(!flag)}>Change</button>

            <p style={{backgroundColor: flag ? "red" : "green"}}> Car's Color is: {obj.color} </p>


            {/* Only If Condition:.. */}
            {
                flag &&
                <p>Price: 100</p>
            }


        </>
    )
}

export default Class06;
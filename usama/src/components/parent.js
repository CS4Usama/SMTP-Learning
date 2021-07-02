import Child from "./1stChild.js"
export default function Parent(jk) {
    console.log(jk);
    return(
        <div style= {{color: jk.color}} >
            Parent
            <Child />
        </div>
        
    );
}
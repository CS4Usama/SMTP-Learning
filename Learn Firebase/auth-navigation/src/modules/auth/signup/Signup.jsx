import UseSignup from "./UseSignup";

export default function Signup() {
    const [setEmail, setPassword, doSignupUser] = UseSignup();

    return(
        <div>
            SignUp Here <br/>
            {/* <input type="text" placeholder="Enter User Name" onChange={(e) => console.log(e.target.value)} /> */}
            <input type="text" placeholder="Enter User Name" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={doSignupUser}>Submit</button>
        </div>
    );
}
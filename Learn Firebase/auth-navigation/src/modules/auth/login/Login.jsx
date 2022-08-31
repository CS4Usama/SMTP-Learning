import UseLogin from "./UseLogin";

export default function Login() {
    const [setEmail, setPassword, doLoginUser] = UseLogin();

    return(
        <div>
            {/* <input type="text" placeholder="Enter User Name" onChange={(e) => console.log(e.target.value)} /> */}
            <input type="text" placeholder="Enter User Name" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={doLoginUser}>Submit</button>
        </div>
    );
}
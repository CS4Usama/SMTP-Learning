import { useDispatch } from "react-redux";
import { doLogout } from "../../store/actions/AuthAction";

function UseHome() {
    const dispatch = useDispatch();
    const doUserLogout = () => {
        dispatch(doLogout());
    }

    return [doUserLogout];
}

export default UseHome;
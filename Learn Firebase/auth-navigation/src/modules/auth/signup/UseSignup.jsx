import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {doSignup} from '../../../store/actions/AuthAction';

export default function UseSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const doSignupUser = () => {
        let user = {
            email,
            password
        }
        // dispatch(action);
        // dispatch(doSignup(email, password));     //By Separate Parameters/Props
        dispatch(doSignup(user));       //By Object
    }

    return [setEmail, setPassword, doSignupUser];
}
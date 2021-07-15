import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {doLogin} from '../../../store/actions/AuthAction';

export default function UseLogin() {
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const dispatch = useDispatch();

    const doLoginUser = () => {
        // dispatch(action);
        dispatch(doLogin(email, password));
    }

    return [setEmail, setPassword, doLoginUser];
}
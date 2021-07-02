import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
               <img src="https://i.pinimg.com/originals/ea/53/9b/ea539bb5fa2b1e1a02f2acd2b8fa5db0.png" alt="@hendriyudhis"/> 
                <div className="login_text">
                    <h1>Kuy kita chatting!</h1>
                </div>
                <Button onClick={signIn}>
                    Masuk dengan google
                </Button>
           </div>
        </div>
    )
}

export default Login

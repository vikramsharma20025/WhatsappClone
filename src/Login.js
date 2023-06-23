import React, { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth,provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{},dispatch] = useStateValue();
    const signin = () =>{
        console.log('log in function');
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((error) => alert(error.message));
    }
    return (
        <div className='Login'>
            <div className='login__container'>
                <img
                src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg'
                alt=''
                />
                <div className='login__text'>
                    <h1>
                        Sign in to whatsapp
                    </h1>
                </div>
                <Button onClick={signin}>Sign in with Google</Button>
            </div>
            {/* <h1>Login</h1> */}
        </div>
    );
}

export default Login;
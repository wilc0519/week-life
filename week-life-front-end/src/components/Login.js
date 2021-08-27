import React from 'react';
import GoogleLogin from 'react-google-login';

export const Login = ({clientId, onLoginSuccess, onLoginFailure, isSignedIno}) => {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log(isSignedIno)
    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={isSignedIno}
            />
        </div>
    )
}
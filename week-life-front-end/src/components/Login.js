import React from 'react';
import GoogleLogin from 'react-google-login';

export const Login = ({clientId, onLoginSuccess, onLoginFailure, isSignedIn}) => {
    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
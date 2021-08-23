import React, { useState, useEffect } from 'react';
import { userApi } from '../api/userApi';
import { Login } from './Login';
import { Logout } from './Logout';


export const Authentication = () => {
    const clientId = "869435522440-9c7q2p1ao5ki97orc02pd7nnjduq1gtn.apps.googleusercontent.com"
    let [isSignedIn, setIsSignedIn]= useState(false)
    let [showLoginButton, setShowLoginButton] = useState(true);
    let [showLogoutButton, setShowLogoutButton] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    
    // const [accessToken, setAccessToken]=useState("");

    const onLoginSuccess = (res) => {
        
        console.log('Login Success;', res.profileObjec);
        console.log(res);
        showLoginButton = setShowLoginButton(false);
        showLogoutButton = setShowLogoutButton(true);
        isSignedIn = setIsSignedIn(true);

        const name = res.profileObj.givenName;
        const email = res.profileObj.email;
        const lastName = res.profileObj.familyName;
        const url = res.profileObj.imageUrl;
        setName(res.profileObj.givenName);
        setLastName(res.profileObj.familyName);
        setEmail(res.profileObj.email);
        setUrl(res.profileObj.imageUrl);
        userApi.post('http://localhost:3001/user', { firstName: name, lastName: lastName, email: email, imageUrl:url})
            .then((result) => {
                console.log("aqui esta esta verga")
                console.log(result)
            }).catch((error) => {
                console.log("el error esta aqui")
                console.log(error)
            })
    }
    const onLoginFailure = (res) => {
        console.log('Login Failed ', res);
    };

    const onSignOutSuccess = (res) => {
        alert("You have been logget out successfully");
        showLoginButton = setShowLoginButton(true);
        showLogoutButton = setShowLogoutButton(false);
        isSignedIn = setIsSignedIn(false)
        setName("");
        setLastName("");
        setEmail("");
        setUrl("");
        window.location.href="http://localhost:3000/"
    }
    return (
        <div>

            {
                showLoginButton
                    ? <Login clientId={clientId} onLoginSuccess={onLoginSuccess} onLoginFailure={onLoginFailure} 
                    isSignedIn={isSignedIn}/>
                    : null
            }
            {
                showLogoutButton
                    ? <Logout clientId={clientId} onSignOutSuccess={onSignOutSuccess} />
                    : null
            }
        </div>
    )
}

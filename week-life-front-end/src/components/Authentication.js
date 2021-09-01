import React, { useState, useEffect } from 'react';
import { userApi } from '../api/userApi';
import { Login } from './Login';
import { Logout } from './Logout';


export const Authentication = () => {

    const clientId = "869435522440-9c7q2p1ao5ki97orc02pd7nnjduq1gtn.apps.googleusercontent.com"
    let [isSignedIn, setIsSignedIn]= useState(false)
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    

    const onLoginSuccess = (res) => {
        console.log('Login Success;', res.profileObjec);
        console.log(res);
        setIsSignedIn(true);
        const name = res.profileObj.givenName;
        const email = res.profileObj.email;
        const lastName = res.profileObj.familyName;
        const url = res.profileObj.imageUrl;
        setName(res.profileObj.givenName);
        setLastName(res.profileObj.familyName);
        setEmail(res.profileObj.email);
        setUrl(res.profileObj.imageUrl);
        userApi.post('http://localhost:3001/v1/users', { firstName: name, lastName: lastName, email: email, imageUrl:url})
            .then((result) => {
                console.log(result)
            }).catch((error) => {
            })
    }
    const onLoginFailure = (res) => {
        console.log('Login Failed ', res);
    };

    const onSignOutSuccess = (res) => {
        alert("You have been logget out successfully");
        setIsSignedIn(false)
        setName("");
        setLastName("");
        setEmail("");
        setUrl("");
        window.location.href="http://localhost:3000/"
    }
    return (
        <div>

            {
                
                isSignedIn
                    ? <Logout clientId={clientId} onSignOutSuccess={onSignOutSuccess} />
                    : <Login clientId={clientId} onLoginSuccess={onLoginSuccess} onLoginFailure={onLoginFailure} 
                    isSignedIno={isSignedIn}/>
            }
        </div>
    )
}

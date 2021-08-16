import React,{useState} from 'react';
import { userApi } from '../api/userApi';
import { Login } from './Login';
import { Logout } from './Logout';


export const Authentication =()=>{

    
    const clientId = "869435522440-9c7q2p1ao5ki97orc02pd7nnjduq1gtn.apps.googleusercontent.com"
    let [showLoginButton, setShowLoginButton]=useState(true);
    let [showLogoutButton, setShowLogoutButton]=useState(false);
    const [name, setName]=useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]=useState("");
    const [url, setUrl]=useState("");
    // const [accessToken, setAccessToken]=useState("");

    const onLoginSuccess = (res)=>{
        console.log('Login Success;', res.profileObjec);
        console.log(res);
        showLoginButton=setShowLoginButton(false);
        showLogoutButton=setShowLogoutButton(true);

        const name = res.profileObj.givenName
        const email = res.profileObj.email
        const lastName = res.profileObj.familyName
        setName(res.profileObj.givenName);
        setLastName(res.profileObj.familyName);
        setEmail(res.profileObj.email);
        userApi.post('http://localhost:3001/user', {firstName:name,lastName:lastName,email:email})
        .then((result)=>{
            console.log("aqui esta esta verga")
            console.log(result)
        }).catch((error)=>{
            console.log("el error esta aqui")
            console.log(error)
        })

    }
    const onLoginFailure = (res)=>{
        console.log('Login Failed ', res);
    };

    const onSignOutSuccess = (res)=>{
        alert("You have been logget out successfully");
        showLoginButton= setShowLoginButton(true);
        showLogoutButton= setShowLogoutButton(false);
        setName("");
        setLastName("");
        setEmail("");
        setUrl("");
    }
    return(
        <div>
            <h1>Login with google</h1>
            <img src={url} alt={name}></img>
            <h3>welcome: {name} {lastName}</h3>
            <h3>Email: {email}</h3>
            <br></br>
            <br></br>
            {
                showLoginButton
                ?<Login clientId={clientId} onLoginSuccess={onLoginSuccess} onLoginFailure={onLoginFailure}/>
                :null
            }
            {
                showLogoutButton
                ?<Logout clientId={clientId} onSignOutSuccess = {onSignOutSuccess}/>
                :null
            }
        </div>
    )
}

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'
import { NavBar } from '../components/NavBar';
import { userApi } from '../api/userApi';
//import {email} from '../components/Authentication'

export const DateBirth = () => {
    const [startDate, setStartDate] = useState(new Date())
    const email='wilc0519@gmail.com'
    const change = (date) => {
        setStartDate(date)
    }

    const eventButton = () => {
        alert(startDate)
        userApi.patch("http://localhost:3001/user/datebirth", { dateOfBirth: new Date(startDate), email: email })
            .then((result) => {
                console.log("We are here")
                console.log(startDate)
                console.log(result)
            }).catch((error) => {
                console.log("fail")
                console.log(error)
            })

    }
    return (

        <div>
            <div className='App-navBar'><NavBar /></div>
            <div className='App-header'>
                <h1>Enter your date of birth</h1>
                <DatePicker
                    
                    selected={startDate}
                    onChange={change}
                />
                <br /><br />
                <input type="button" value="SAVE" onClick={() => { eventButton() }} />
            </div>
        </div >
    )
}

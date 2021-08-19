import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'
import { NavBar } from '../components/NavBar';

export const DateBirth = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        
        <div>
           <div className= 'App-navBar'><NavBar/></div>
           <div className= 'App-header'>
           <h1>Enter your date of birth</h1>
            <DatePicker
            selected={startDate}
            onChange={(date) =>setStartDate(date)}
            />
            <br/>
            <br/>
            <br/>
            <input type = "button" value = "SAVE" className = "btn btn-primary"/>
           </div>
                
        </div  >
    )
}

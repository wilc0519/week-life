import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateBirth = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <h1>Enter your date of birth</h1>
            <DatePicker
            selected={startDate}
            onChange={(date) =>setStartDate(date)}
            />
            <br/>
            <br/>
            <input type = "button" value = "SAVEs" className = "btn btn-primary"/>    
        </div  >
    )
}

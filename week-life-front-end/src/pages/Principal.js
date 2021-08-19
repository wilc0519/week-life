import React from 'react'
import { NavBar } from '../components/NavBar'
import '../App.css'

export const Principal = () => {
    return (
        <div>
            <div className='App-navBar'>
                <NavBar />
            </div>
            <div className='App-header'>
                <h1>Login with google</h1>
                <h3>welcome </h3>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

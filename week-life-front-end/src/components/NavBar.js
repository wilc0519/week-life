import React from 'react'
import { Authentication } from './Authentication'

export const NavBar = () => {
    return (
        <div style={{background:'red', margin:'top'}}>
            <nav>
                <Authentication/>
            </nav>
        </div>
    )
}

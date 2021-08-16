import React from 'react';
import { GoogleLogout } from 'react-google-login';

export const Logout =({clientId, onSignOutSuccess}) => {
    return(
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSignOutSuccess}
        />
    )
}
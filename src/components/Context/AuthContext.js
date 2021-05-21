import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') !== null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

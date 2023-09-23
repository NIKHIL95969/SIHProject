import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ( { children } ) => {

    const [user, setUser] = useState()
    const [authToken, setAuthToken] = useState()

    const login = ({username, college_id, password}) => {

        const data = {
            username,
            college_id,
            password,
          };

        fetch('http://127.0.0.1:8000/account/api/login/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then( response => response.json())
        .then(data => {
            console.log(data);
            setUser(data.username)
            setAuthToken(data.token)

            // document.cookie = `token=${data}; expires=3600;`;

            localStorage.setItem('token', data.token);

        })
        .catch(error => {
            console.log(error);
        });

    }

    const logout = () => {
        setUser(null)
        setAuthToken(null)
    }

    const register = () => {


        setUser()
    }

    return( 
        <AuthContext.Provider value={ {user, setUser, login, logout, register}} >
            {children}
        </AuthContext.Provider>
    );
}

export  const useAuth = () =>{
    return useContext(AuthContext)
}




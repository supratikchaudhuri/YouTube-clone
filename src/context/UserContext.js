import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("/user")
        .then(res => res.json())
        .then(res => setUser(res))
        .catch(err => console.log(err));
    }, []);

    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}
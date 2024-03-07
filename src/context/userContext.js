"use client";

import { createContext, useEffect, useState } from "react";
import { getCurrentLoginUser } from "../firebase/user/get-current-login-user";

export const UserAuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentLoginUser, setCurrentLoginUser] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getCurrentLoginUser();
                if (user) {
                    setCurrentLoginUser(user.email)
                }

            } catch (error) {
                console.log("Error in fetching login user")
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [currentLoginUser]);

    console.log(currentLoginUser, "currentloginuser");
    return (
        <UserAuthContext.Provider
            value={{ loading, currentLoginUser }}
        >{children}</UserAuthContext.Provider>
    )
}
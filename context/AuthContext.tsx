import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import { loginSlice } from "../store/loginSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState(null);
   

    const login = (username, password) => {




        setIsLoading(true);
        


        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo)

            if (userInfo) {
                setUserInfo(userInfo)
                setUserToken(userToken);
            }


            setIsLoading(false);
        } catch (error) {
            console.warn(`isLogged in error  ${error}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    )
}
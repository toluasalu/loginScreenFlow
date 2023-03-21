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
    const dispatch = useDispatch();

    const login = (username, password) => {




        setIsLoading(true);
        axios.post('http://192.168.80.115:4000/login', {
            name: username,
            password
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {

            if (res.status === 201) {
                let userInfo = res.data
                setUserInfo(userInfo)
                setUserToken(userInfo.accessToken)
                AsyncStorage.setItem('userInfo', userInfo)
                AsyncStorage.setItem('userToken', userInfo.accessToken)
                dispatch(loginSlice.actions.addUser({ name: username, password, userToken }))
            }

            console.log(res.data)
            console.log('User Token: ' + res.data.accessToken)

        })
            .catch(err => console.log(err))


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
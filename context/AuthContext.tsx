import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);

    const login = (username, password) => {
          
          setIsLoading(true);
          axios.post(`${BASE_URL}/jwt-auth/v1/token`,{
            username,
            password
          })
          .then( res => {
            console.log(res.data);
          })
           .catch( err => console.log(err))
           
        //   setUserToken('ioiojlkad');
        //   AsyncStorage.setItem('userToken', "ioiojlkad");
          setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch (error) {
            console.warn(`isLogged in error  ${error}`)
        }
    }

    useEffect(() => {
              isLoggedIn()
    }, []);

     return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
     )
}
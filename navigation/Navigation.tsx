import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from '../context/AuthContext';
import { authSlice } from "../store/authSlice";
import AppStack from '../AppStack';
import AuthStack from '../AuthStack';
import { useSelector, useDispatch  } from "react-redux";




const Navigation = () => {

    //const {isLoading, userToken} = useContext(AuthContext);
    const isLoading = useSelector((state) => state.user.loading);
    const userToken = useSelector((state) => state.user.token);
    
     if(isLoading){
           return(
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <ActivityIndicator size={'large'}/>
           </View>
           )
    } 

    return( 
        <NavigationContainer>
            {userToken != null ? <AppStack /> : <AuthStack />}
         </NavigationContainer>
    )
    
}

export default Navigation;
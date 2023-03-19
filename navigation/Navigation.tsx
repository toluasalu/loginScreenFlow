import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import AppStack from '../AppStack';
import AuthStack from '../AuthStack';




const Navigation = () => {

    const {isLoading, userToken} = useContext(AuthContext);
    
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
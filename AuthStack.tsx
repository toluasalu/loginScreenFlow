import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './Register';
import LoginScreen from "./Login";

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} />
    
             </Stack.Navigator>
    )
}

export default AuthStack;

//http://localhost/wp-jwt-test/wp-json/jwt-auth/v1/token
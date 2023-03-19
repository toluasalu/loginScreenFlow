import React, { useContext } from "react";
import {View, StyleSheet, Text, TouchableOpacity  } from "react-native";
import { AuthContext } from "./context/AuthContext";

const HomeScreen = () => {
   const { logout } = useContext(AuthContext); 

   return(
    <View style={styles.container}>
        <Text style={{color: "black", fontSize: 18}}>Home</Text>
        <TouchableOpacity
            onPress={() => {logout()}}
            style={{ backgroundColor: '#AD40AF', padding: 20, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff' }}>Logout</Text>
          </TouchableOpacity>
  
    </View>
   )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: "center"
    },
  });

  export default HomeScreen;
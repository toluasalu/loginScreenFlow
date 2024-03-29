import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { loginUser } from './store/authSlice';
import { useDispatch} from "react-redux";





const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 300, height: 300, transform: [{ rotate: '-5deg' }] }}
            source={require('./assets/paper-plane.png')} />
        </View>
        <Text style={{
          fontFamily: 'Roboto_500Medium',
          fontSize: 28,
          fontWeight: '500',
          color: '#333',
          marginBottom: 30
        }}>
          Login
        </Text>

        <View
          style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 25 }
          }>
          <MaterialIcons
            name='alternate-email'
            size={20}
            color='#666'
            style={{ marginRight: 5 }} />
          <TextInput
            placeholder='Email ID'
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 25 }}>
          <Ionicons
            name='ios-lock-closed-outline'
            size={20}
            color='#666'
            style={{ marginRight: 5 }} />
          <TextInput
            placeholder='Password'
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType='email-address'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Forgot?</Text>
          </TouchableOpacity>



        </View>
        <TouchableOpacity
          onPress={() => { dispatch(loginUser({email, password})) }}
          style={{ backgroundColor: '#AD40AF', padding: 20, borderRadius: 10, marginBottom: 30 }}>
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff' }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, login with ...</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <Image source={require('./assets/google.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <Image source={require('./assets/twitter.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <Image source={require('./assets/facebook.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ marginRight: 5 }}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Register</Text>
          </TouchableOpacity>

        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default LoginScreen;
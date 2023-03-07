import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { MaterialIcons } from  '@expo/vector-icons';
import { Ionicons } from  '@expo/vector-icons';

export default function App() {
  const [loaded] = useFonts({
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if(!loaded){
       return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
      <View style={{alignItems: 'center'}}>
        <Image style={{width: 300, height: 300, transform:[{rotate: '-5deg'}]}} source= {require('./assets/paper-plane.png')}/>
      </View>
      <Text style={{
      fontFamily: 'Roboto-Medium', 
      fontSize: 28,  
      fontWeight: '500', 
      color: '#333',
       marginBottom: 30}}>
        Login
        </Text>
      <View style={{flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
          <MaterialIcons name='alternate-email' size={20} color='#666' style={{marginRight: 5}} />
          <TextInput placeholder='Email ID' style={{flex: 1, paddingVertical: 0}} keyboardType='email-address'/>
      </View>

      <View style={{flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
          <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{marginRight: 5}} />
          <TextInput placeholder='Password' style={{flex: 1, paddingVertical: 0}} keyboardType='email-address'/>
      </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

//Illustration by <a href="https://icons8.com/illustrations/author/A7iGlOUD5Neq">dekob2</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
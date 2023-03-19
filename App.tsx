import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { AuthProvider } from './context/AuthContext';
import Navigation from './navigation/Navigation';


export default function App() {
  
   
  const [loaded] = useFonts({
    Roboto_500Medium,
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthProvider>
         <Navigation />
      </AuthProvider>
    );
  }



}


//Illustration by <a href="https://icons8.com/illustrations/author/A7iGlOUD5Neq">dekob2</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
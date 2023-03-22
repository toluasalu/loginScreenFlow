import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { AuthProvider } from './context/AuthContext';
import Navigation from './navigation/Navigation';
import { Provider } from "react-redux";
import { store } from "./store/store";


export default function App() {


  const [loaded] = useFonts({
    Roboto_500Medium,
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }



}


//Illustration by <a href="https://icons8.com/illustrations/author/A7iGlOUD5Neq">dekob2</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
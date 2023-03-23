import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import InputField from './components/InputField';
import { createUser  } from "./store/authSlice";
import { useDispatch } from "react-redux";

const RegisterScreen = ({ navigation }: any) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dobLabel, setDobLabel] = useState('Date of Birth');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setDobLabel(currentDate.toLocaleString());
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            maximumDate: new Date(),
            minimumDate: new Date('1980-01-01'),
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
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
                    Register
                </Text>

                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, register with ...</Text>






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

                <InputField
                    label={'Full Name'}
                    icon={<Ionicons
                        name='person-outline'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }} />}

                    inputType={'text'}
                    keyboardType='default'

                />

                <InputField
                    label={'Email ID'}
                    icon={<MaterialIcons
                        name='alternate-email'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }} />}
                    inputType={'text'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyBoardType='email-address'

                />




                <InputField label={'Password'} icon={<Ionicons
                    name='ios-lock-closed-outline'
                    size={20}
                    color='#666'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{ marginRight: 5 }} />} inputType="password" />

                <InputField label={'Confirm Password'} icon={<Ionicons
                    name='ios-lock-closed-outline'
                    size={20}
                    color='#666'
                   
                    style={{ marginRight: 5 }} />} inputType="password" />


                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
                    <Ionicons
                        name='calendar-outline'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }} />

                    <TouchableOpacity onPress={showDatepicker}>
                        <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>{dobLabel}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => dispatch(createUser({email, password}))}
                    style={{ backgroundColor: '#AD40AF', padding: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff' }}>Register</Text>
                </TouchableOpacity>



                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 15 }}>
                    <Text style={{ marginRight: 5 }}>Already Registered?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
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

export default RegisterScreen;
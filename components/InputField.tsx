import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButton,
    fieldButtonFunc,
    value,
    onChangeText,
    dateLocale }: any) {
    return (
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 25 }}>
            {icon}
            {inputType === 'password' ? (
                <TextInput
                    placeholder={label}
                    style={{ flex: 1, paddingVertical: 0 }}
                    keyboardType={keyboardType}
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChangeText}
                />) : (
                <>
                    <TextInput
                        placeholder={label}
                        style={{ flex: 1, paddingVertical: 0 }}
                        keyboardType={keyboardType}
                        value={value}
                        onChangeText={onChangeText}

                    />

                </>
            )}
            <TouchableOpacity onPress={fieldButtonFunc}>
                <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButton}</Text>
            </TouchableOpacity>



        </View>
    );
}
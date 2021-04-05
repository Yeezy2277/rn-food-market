import {StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import { useForm, Controller } from "react-hook-form";
import React from 'react';
import { useFonts, Oswald_200ExtraLight, Oswald_700Bold } from '@expo-google-fonts/oswald';
import Welcome from "./Welcome";
import {authMeAPI} from "../api";

export default function Login ({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        authMeAPI.login(data).then(res => {

        }).catch(() => {
            return <View style={{position: "absolute", top: 15}}>
                <Text style={{color: "white", fontSize: 25, fontFamily: "Oswald_700Bold"}}>Неправильный логин или пароль</Text>
            </View>
        })
    };
    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight, Oswald_700Bold
    });

    if (!fontsLoaded) {
        return <Welcome/>;
    }
    return <View style={styles.container}>
        <View style={{flex: 1,flexDirection: "row", paddingHorizontal: 20, paddingRight: 20}}>
            <View>
                <Text h4 style={{fontFamily: "Oswald_700Bold", fontSize: 24, color: "white"}}>Вход в аккаунт</Text>
                <Text h4 style={{fontFamily: "Oswald_200ExtraLight", fontSize: 15, color: "white", width: "65%"}}>Войдите в свой аккаунт, чтобы начать совершать покупки</Text>
            </View>
        </View>
        <View style={{flex: 3, justifyContent: "space-between", backgroundColor: "white", borderRadius: 15, padding: 50}}>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder='Логин'
                            placeholderTextColor="#5744F2"
                            style={{paddingTop: 20, marginTop: 25, borderBottomColor: "#5744F2", borderBottomWidth:2}}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="username"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder='Пароль'
                            placeholderTextColor="#5744F2"
                            style={{paddingTop: 20, marginTop: 25, borderBottomColor: "#5744F2", borderBottomWidth:2}}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <View style={{alignItems: "center", marginTop: 35}}>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                        <Text style={{color: "white", fontFamily: "Oswald_700Bold",
                            borderRadius: 15,backgroundColor: "#5744F2", paddingVertical: 7, paddingHorizontal: 35}}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Registration')}>
                    <Text style={{color: "#5744F2", fontFamily: "Oswald_700Bold"}}>Регистрация</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Reset')}>
                    <Text style={{color: "#5744F2", fontFamily: "Oswald_700Bold"}}>Сбросить пароль</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5744F2",
        color: "white",
        padding: 40
    },
    text: {
        marginTop: 70,
        marginBottom: 50,
        textAlign: "center",
    }

});


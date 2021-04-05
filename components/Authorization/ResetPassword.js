import {StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import React from 'react';
import { useFonts, Oswald_200ExtraLight, Oswald_700Bold } from '@expo-google-fonts/oswald';
import Welcome from "./Welcome";

export default function Login ({ navigation }) {
    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight, Oswald_700Bold
    });

    if (!fontsLoaded) {
        return <Welcome/>;
    }

    return <View style={styles.container}>
        <View style={{flex: 1,flexDirection: "row", paddingHorizontal: 20}}>
            <View>
                <Text h4 style={{fontFamily: "Oswald_700Bold", fontSize: 24, color: "white"}}>Восстановление пароля</Text>
                <Text h4 style={{fontFamily: "Oswald_200ExtraLight", fontSize: 15, color: "white", width: "45%"}}>Чтобы восстановить пароль, введите свой email адрес, после чего вам придет туда сообщение с новым паролем</Text>
            </View>
        </View>
        <View style={{flex: 3, justifyContent: "space-between", backgroundColor: "white", borderRadius: 15, padding: 50}}>
            <View>
                <TextInput
                    placeholder='Email адрес'
                    placeholderTextColor="#5744F2"
                    style={{paddingTop: 20, marginTop: 25, borderBottomColor: "#5744F2", borderBottomWidth:2}}
                />
                <View style={{alignItems: "center", marginTop: 35}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}>
                        <Text style={{color: "white", fontFamily: "Oswald_700Bold",
                            borderRadius: 15,backgroundColor: "#5744F2", paddingVertical: 7, paddingHorizontal: 35}}>Сбросить пароль</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: "#5744F2", fontFamily: "Oswald_700Bold"}}>Регистрация</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Registration')}>
                    <Text style={{color: "#5744F2", fontFamily: "Oswald_700Bold"}}>Войти в аккаунт</Text>
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


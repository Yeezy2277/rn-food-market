import {StyleSheet, View} from "react-native";
import React from 'react';
import {Button, Text} from "react-native-elements";

export default function Welcome({ navigation }) {
    return <View style={styles.container}>
        <Text h2 style={styles.text}>Добро пожаловать в приложение. Нажмите кнопку ниже, чтобы продолжить</Text>
        <Button
            title="Начать"
            type="solid"
            onPress={() => navigation.navigate('Login')}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5744F2",
        padding: 40
    },
    text: {
        marginTop: 70,
        marginBottom: 50,
        textAlign: "center",
        color: "white"
    },
    button: {
        width: "40"
    }
});

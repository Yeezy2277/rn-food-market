import {StatusBar} from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeProvider} from "react-native-elements";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from "./components/Authorization/Welcome";
import Login from "./components/Authorization/Login";
import Registration from "./components/Authorization/Registration";
import ResetPassword from "./components/Authorization/ResetPassword";
import HomeScreen from "./components/Account/Home";

const Stack = createStackNavigator();
export default function App() {
    const [isFirstRun, setIsFirstRun] = React.useState(null)
    React.useEffect(() => {
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', "first");
                setIsFirstRun("first");
            } else {
                setIsFirstRun("notFirst");
            }
        })
    }, [])
    // React.useEffect(() => {
    //     AsyncStorage.setItem("alreadyLaunched", "notFirst")
    // },[])
    return (
        isFirstRun === null ? null : isFirstRun === "first" ?
            <NavigationContainer>
                <ThemeProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Welcome}/>
                    </Stack.Navigator>
                </ThemeProvider>
            </NavigationContainer> : isFirstRun === "notFirst" ?
                <NavigationContainer>
                    <ThemeProvider>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={HomeScreen}/>
                            <Stack.Screen name="Login" component={Login}/>
                            <Stack.Screen name="Registration" component={Registration}/>
                            <Stack.Screen name="Reset" component={ResetPassword}/>
                        </Stack.Navigator>
                    </ThemeProvider>
                </NavigationContainer> : null
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

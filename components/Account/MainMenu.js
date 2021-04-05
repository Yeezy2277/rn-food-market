import {StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler"
import React from 'react';
import onGestureEvent from "react-native-redash";

export default function MainMenu({children}) {
    const state = new Value(State.UNDETERMINED);
    return <TapGestureHandler>
        {children}
    </TapGestureHandler>
}
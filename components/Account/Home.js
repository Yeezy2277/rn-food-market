import {Button, Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Dimensions} from "react-native";
import React from "react";
import cart from '../../assets/shopping-cart.png';
import avatar from "../../assets/user.png"
import search from "../../assets/search.png"
import avocado from "../../assets/avocado.png"
import heart from "../../assets/heart.png"
import add from "../../assets/add.png"
import heartActive from "../../assets/heart-active.png"
import {Roboto_400Regular, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto";
import {LondrinaSolid_400Regular} from "@expo-google-fonts/londrina-solid";
import Welcome from "../Authorization/Welcome";
import {goods} from "./Goods";
import {authMeAPI} from "../api";


export default function HomeScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular, Roboto_700Bold, LondrinaSolid_400Regular
    });
    const [like, setLike] = React.useState(false)
    if (!fontsLoaded) {
        return <Welcome/>;
    }
    return (
        <View style={{flex: 1, backgroundColor: "#5744F2", paddingHorizontal: 20}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                <Text style={styles.textTitle}>Привет, Виталий</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity style={{marginRight: 15}}>
                        <Image source={cart} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <View style={{ width: 40, height: 40, borderColor: "white", borderWidth: 3, borderRadius: 40 }}>
                        <Image source={avatar} style={{ width: 30, height: 30,marginLeft: 1 }} />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 25}}>
                <TextInput placeholder="Поиск по продуктам" placeholderTextColor="white"
                           style={{color: "white", borderColor: "white", borderWidth: 2, paddingHorizontal: 70, paddingVertical: 5, borderRadius: 10}}/>
                <TouchableOpacity>
                    <Image source={search} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                <Text style={styles.text}>Топ продуктов</Text>
                <TouchableOpacity>
                    <Text style={{fontFamily: "LondrinaSolid_400Regular", color: "white"}}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: "white", flex: 2, borderRadius: 15, marginTop: 15, flexDirection: "row", flexWrap: "wrap"}}>
                    {goods.map(item => {
                        return <View key={item.id} style={{borderColor: "#5744F2", borderWidth: 3, borderRadius: 15,
                            width: 160, height: 185, marginTop: 10, marginLeft: 10, alignItems: "center", paddingHorizontal: 10}}>
                            <View style={{flexDirection: "row"}}>
                                <Image source={avocado} style={{ width: 100, height: 100 }} />
                                {!like ? <TouchableOpacity style={{marginTop: 10}} onPress={() => setLike(true)}>
                                    <Image source={heart} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity> : <TouchableOpacity style={{marginTop: 10}} onPress={() => setLike(false)}>
                                    <Image source={heartActive} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>}
                            </View>
                            <View style={{flexDirection: "row", alignItems: "flex-end"}}>
                                <View>
                                    <Text style={{color: "#5744F2", fontSize: 18, fontFamily: "Roboto_700Bold" }}>{item.name}</Text>
                                    <Text style={{color: "#5744F2", fontSize: 17, fontFamily: "Roboto_700Bold" }}>{item.count}</Text>
                                    <Text style={{fontFamily: "LondrinaSolid_400Regular", color: "#5744F2", fontSize: 20}}>${item.price}</Text>
                                </View>
                                <TouchableOpacity style={{marginBottom: 5}}>
                                    <Image source={add} style={{ width: 40, height: 40 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5744F2",
        color: "white",
        padding: 40
    },
    textTitle: {
        color: "white",
        fontFamily: "Roboto_700Bold",
        fontSize: 20
    },
    text: {
        color: "white",
        fontFamily: "Roboto_400Regular",
        fontSize: 20
    }

});
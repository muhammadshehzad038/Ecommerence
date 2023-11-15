import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation =useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = {
          email: email,
          password: password,
        };
    
        // send a POST  request to the backend API to register the user
        axios
          .post("http://192.168.43.149:8000/login", user)
          .then((response) => {
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            navigation.replace("Main");
          })
          .catch((error) => {
            Alert.alert("Login Error", "Invalid Email");
            console.log(error);
          });
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={styles.txt}
                    >
                        Login In to your Account
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={styles.box}>
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="orange"
                        />
                        <TextInput style={[styles.textinput, { fontSize: email ? 16 : 16 }]}
                            placeholder='Enter email here!'
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.box}>
                        <AntDesign
                            name="lock1"
                            size={24}
                            color="orange"
                            style={{ marginLeft: 8 }}
                        />
                        <TextInput style={[styles.textinput, { fontSize: password ? 16 : 16 }]}
                            placeholder='Enter Password here!'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true} />
                    </View>
                </View>
                <View
                    style={styles.heading}
                >
                    <Text>Keep me logged in</Text>

                    <Text style={{ color: "orange", fontWeight: "500" }}>
                        Forgot Password
                    </Text>
                </View>
                <View style={{marginTop:60}}>
                    <Pressable style={styles.btn}
                    onPress={handleLogin}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>Login</Text>
                    </Pressable>
                </View>
                <View style={{marginTop: 15}}>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={{ textAlign: "center", color: "orange", fontSize: 16 }}>Don't have an account? Sign Up</Text>
                    </Pressable>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    txt: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 12,
        color: "#041E42",
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,
    },
    textinput: {
        color: "gray",
        marginVertical: 10,
        width: 300,
    },
    heading: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
    }
})
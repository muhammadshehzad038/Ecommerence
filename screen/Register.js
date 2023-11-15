import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image, KeyboardAvoidingView, ScrollView,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://192.168.43.149/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <View>
          <Image
            style={{ width: 150, height: 100 }}
            source={{
              uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
            }}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ width: '100%', alignItems: 'center' }}>
          <Text style={styles.txt}>Register to your Account</Text>
          <View style={{ marginTop: 70 }}>
            <View style={styles.box}>
              <Ionicons name="ios-person" size={24} color="orange" style={{ marginLeft: 8 }} />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.textinput}
                placeholder="Enter your name"
              />
            </View>
            <View style={styles.box}>
              <MaterialIcons name="email" size={24} color="orange" style={{ marginLeft: 8 }} />
              <TextInput
                style={styles.textinput}
                placeholder="Enter email here!"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.box}>
              <AntDesign name="lock1" size={24} color="orange" style={{ marginLeft: 8 }} />
              <TextInput
                style={styles.textinput}
                placeholder="Enter Password here!"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.heading}>
            <Text>Keep me logged in</Text>
            <Text style={{ color: 'orange', fontWeight: '500' }}>Forgot Password</Text>
          </View>
          <View style={{ marginTop: 60 }}>
            <Pressable onPress={handleRegister} style={styles.btn}>
              <Text style={styles.btnText}>Register</Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 15 }}>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{ textAlign: 'center', color: 'orange', fontSize: 16 }}>
                Already have an account? Sign In
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#041E42',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#D0D0D0',
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  textinput: {
    color: 'gray',
    marginVertical: 10,
    width: 300,
    fontSize: 16,
  },
  heading: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: 200,
    backgroundColor: '#FEBE10',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;

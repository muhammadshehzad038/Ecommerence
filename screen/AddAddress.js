import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { UserType } from '../UserContext';


const AddAddress = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const {userId, setUserId} = useContext(UserType)
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId)
    }

    fetchUser();
  }, []);
  console.log(userId)

  const handleAddress = () => {
    const address = {
      name,
      mobileNo,
      houseNo,
      street,
      landmark,
      postalCode
    }

    axios.post("http://192.168.43.149:8000/addresses", { userId, address }).then((response) => {
      Alert.alert("success", "Address Added Succssfully");
      console.log(response);
      setName("");
      setMobileNo("");
      setHouseNo("");
      setStreet("");
      setLandmark("");
      setPostalCode("");
      setTimeout(() => {
        navigation.goBack();
      }, [500]);
    }).catch((err) => {
      Alert.alert("Faied to add Address", err)
    })
  }


  return (
    <View>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ height: 50, backgroundColor: "orange" }} />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Add a new Address
          </Text>

          <TextInput
            placeholderTextColor={"black"}
            placeholder="Pakistan"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />

          <View style={{ marginVertical: 10 }}>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Full name:
            </Text>

            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <Entypo name="user" size={24} color="black" />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholderTextColor={"black"}
                placeholder="enter your name"
              >
              </TextInput>
            </Pressable>
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Contact number:
            </Text>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <MaterialIcons name="contact-phone" size={24} color="black" />
              <TextInput
                value={mobileNo}
                onChangeText={(text) => setMobileNo(text)}
                placeholderTextColor={"black"}

                placeholder="Mobile No"
              />
            </Pressable>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Flat,House No,Building,Company:
            </Text>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <MaterialIcons name="house" size={24} color="black" />
              <TextInput
                value={houseNo}
                onChangeText={(text) => setHouseNo(text)}
                placeholderTextColor={"black"}

                placeholder=""
              />
            </Pressable>
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Area,Street,sector,village
            </Text>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <FontAwesome5 name="street-view" size={24} color="black" />
              <TextInput
                value={street}
                onChangeText={(text) => setStreet(text)}
                placeholderTextColor={"black"}
                placeholder=""
              />
            </Pressable>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark:</Text>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <FontAwesome5 name="landmark" size={24} color="black" />
              <TextInput
                value={landmark}
                onChangeText={(text) => setLandmark(text)}
                placeholderTextColor={"black"}
                placeholder="Eg near appollo hospital"
              />
            </Pressable>
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode:</Text>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 50,
              flex: 1,
              padding: 10,
              marginTop: 10
            }}>
              <AntDesign name="codepen-circle" size={24} color="black" />

              <TextInput
                value={postalCode}
                onChangeText={(text) => setPostalCode(text)}
                placeholderTextColor={"black"}
                placeholder="Enter Pincode"
              />
            </Pressable>
          </View>

          <Pressable
            onPress={handleAddress}
            style={{
              flexDirection: "row",
              backgroundColor: "#FFC72C",
              padding: 19,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>Add Address</Text>
            <Entypo name="address" size={24} color="red" style={{ marginLeft: 5 }} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({})

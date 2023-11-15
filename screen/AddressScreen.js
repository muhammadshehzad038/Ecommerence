import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import MyHeader from '../component/MyHeader'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useContext, useState, useEffect } from 'react';
import { UserType } from '../UserContext';
import axios from 'axios';
import { useCallback } from 'react';



const AddressScreen = () => {

  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [addresses, setAddresses] = useState([]);

  const fetchAddress = async () => {
    const response = await axios.get(`http://192.168.43.149/addresses/${userId}`)
    const { addresses } = response.data;
    setAddresses(addresses);
  }
  useEffect(() => {
    if (userId) {
      fetchAddress();
    }
  }, [])
// refresh the address of the user by navigated back to address screen
  useFocusEffect(
    useCallback(() => {
      fetchAddress();
    }
    )
  )

  return (
    <View style={{ marginTop: 40 }}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: "center" }}>Addresses</Text>
          <Pressable
            onPress={() => navigation.navigate("Add")} style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              paddingVertical: 9,
              paddingHorizontal: 8,
            }}>
            <Text>Add a new Address</Text>
            <MaterialIcons name="arrow-right" size={24} color="orange" />
          </Pressable>

          {addresses.map((item, index) => {
            return (
              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: "orange",
                  padding: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                  <Entypo name="location-pin" size={24} color="red" />
                </View>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.houseNo}, {item?.landmark}
                </Text>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.street}
                </Text>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  phone No : {item?.mobileNo}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  pin code : {item?.postalCode}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 7,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Edit</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Remove</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Set as Default</Text>

                  </Pressable>
                </View>
              </Pressable>
            )
          })}

        </View>

      </ScrollView>

    </View>
  )
}

export default AddressScreen
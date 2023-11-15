import { Pressable, StyleSheet, TextInput, View,Image } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from 'react';

const MyHeader = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: "orange",
      },
      headerLeft: () => (
        <Image
          style={{ width: 140, height: 120, resizeMode: "contain" }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png",
          }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginRight: 12,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />

          <AntDesign name="search1" size={24} color="black" />
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.header}>
      <Pressable style={styles.press}>
      <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
        <TextInput placeholder='Enter Amozan.in'/>
      </Pressable>
      <Feather name="mic" size={24} color="black" />
    </View>
    
  )
}

export default MyHeader

const styles = StyleSheet.create({
    header:{
       padding:10,
       flexDirection:'row',
       alignItems:"center",
       backgroundColor:"orange"
    },
    press:{
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 7,
      gap: 10,
      backgroundColor: "white",
      borderRadius: 3,
      height: 38,
      flex: 1,
    }
})
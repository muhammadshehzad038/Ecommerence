import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyHeader from '../component/MyHeader'
import { useRoute } from '@react-navigation/native'
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const dispatch = useDispatch();
  const [adddedCart, setAddedCart]= useState(false)
  const addItemToCart = (item) => {
    setAddedCart(true);
    dispatch(addToCart(item));
     setTimeout(() => {
       setAddedCart(false);
     }, 60000);
  }; 
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <ScrollView style={{ marginTop: 10,flex:1, backgroundColor: "white" }}
    showsVerticalScrollIndicator={false}>
      <MyHeader />
    
     
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 20,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          Rs.{route?.params?.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : Rs{route.params.price}
        </Text>
        <Text style={{ color: "orange" }}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="red" />

          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Deliver To shehzad - Islamabad
          </Text>
        </View>
        <View>
        <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>
        IN Stock
      </Text>
        </View>
        <Pressable
        onPress={() => addItemToCart(route.params.item)} 
        style={{
          flexDirection:"row",
          backgroundColor:"#FFC72C",
          borderRadius:10,
          padding: 10,
          justifyContent:"center",
          alignItems:"center",
          marginHorizontal: 10,
          marginVertical: 10,

        }}>
          {adddedCart ? (
            <View style={{flexDirection:"row"}}>
 <Text style={{color: 'white'}}>Added to cart</Text>
 <FontAwesome name="opencart" size={24} color="white" />
 </View>
          ):
          (
            <View style={{flexDirection:"row"}}>
           <Text style={{color: 'white'}}>Add to cart</Text>
           <FontAwesome name="shopping-cart" size={24} color="white" />
          </View>
          )}
          
        </Pressable>
        <Pressable style={{
          backgroundColor:"#FFC72C",
          borderRadius:10,
          padding: 10,
          justifyContent:"center",
          alignItems:"center",
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row"

        }}>
          <Text style={{color: 'white'}}>Buy Now</Text>
          <FontAwesome name="dollar" size={24} color="white" />
        </Pressable>

      </View>
      </ScrollView>

  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})
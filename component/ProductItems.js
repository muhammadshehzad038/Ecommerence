import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartReducer';


const ProductItems = ({item}) => {
  const [addedCart, setAddedCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (item) =>{
    setAddedCart(true)
    dispatch(addToCart(item))

    setTimeout(()=>{
      setAddedCart(false) 
    }, 60000)
  }
  
  return (

    <View>
    <Pressable
     style={{marginHorizontal:15, marginVertical:10}}>
      <Image style={{height:150, width:150, resizeMode:"contain"}} source={{uri: item.image}}/>
      <Text numberOfLines={1} style={{width:150, marginTop:10}}>{item.title}</Text>
    </Pressable>

      <View
      style={{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Rs.{item?.price}</Text>
      <Text style={{ color: "orange", fontWeight: "bold" }}>
        {item?.rating?.rate} ratings
      </Text>
    </View>
    <Pressable
    onPress={()=>{addItemToCart(item)}}
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
         
         {addedCart ? (
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
    </View>


   
  )
}

export default ProductItems

const styles = StyleSheet.create({})
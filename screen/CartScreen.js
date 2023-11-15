import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import MyHeader from '../component/MyHeader'
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { decrementQuantity, incementQuantity, removeFromCart } from '../redux/CartReducer';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const dispatch = useDispatch();
  const incrementQuantity = (item) =>{
    dispatch(incementQuantity(item))
  }
  const dicrementQuantity= (item)=>{
    dispatch(decrementQuantity(item));
  }

  const deleteItem = (item) =>{
    dispatch(removeFromCart(item))
  }

  return (
    <View style={{ marginTop: 40 }}>
      <MyHeader />
      <ScrollView Vertical showsVerticalScrollIndicator={false} style={{ marginBottom: 40 }}>
        <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "grey" }}>Subtotal:</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", }}>{total}</Text>
        </View>
        <Text style={{ marginHorizontal: 10, }}>EMI details Available</Text>
        <Pressable
        onPress={()=> {navigation.navigate("Confirm")}}

          style={{
            backgroundColor: "#FFC72C",
            padding: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignSelf: "center",
            marginHorizontal: 10,
            marginTop: 10,
            height: 50,
            width: 200
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Proceed to Buy items</Text>
        </Pressable>
        <View
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 16,
          }}
        />
        <View>
          {cart.map((item, index) => (
            <View key={index} style={{
              backgroundColor: "white",
              marginVertical: 10,
              borderBottomColor: "#F0F0F0",
              borderWidth: 1,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,

            }}>
              <Pressable
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Image style={{ height: 140, width: 140, resizeMode: "contain" }} source={{ uri: item.image }} />
                </View>
                <View>
                  <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 }}
                  >
                    Rs:{item?.price}
                  </Text>
                  <Image
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                    source={{
                      uri: "https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png",
                    }}
                  />
                  <Text style={{ color: "green" }}>In Stock</Text>

                </View>
              </Pressable>
              <Pressable style={{
                marginTop: 15,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                padding: 10
              }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  {item.quantity>1?(
                     <Pressable
                     onPress={() => dicrementQuantity(item)}
                     style={{
                       backgroundColor: "#D8D8D8",
                       padding: 7,
                       borderTopLeftRadius: 6,
                       borderBottomLeftRadius: 6,
                     }}
                   >
                     <AntDesign name="minus" size={24} color="black" />
                   </Pressable>
                  ):(
                    <Pressable
                    onPress={()=>deleteItem(item)}
                     style={{
                      backgroundColor: "#D8D8D8",
                      padding: 7,
                      borderRadius: 10
                    }}>
                      <MaterialIcons name="delete" size={24} color="red" />
                    </Pressable>
                  )}
        
                  <Text style={{marginLeft:10}}>{item.quantity}</Text>
                  <Pressable
                   onPress={()=>incrementQuantity(item)}
                    style={{
                      backgroundColor: "#D8D8D8",
                      padding: 7,
                     borderRadius:10,
                     marginLeft:10
                    }}
                  >
                    <Feather name="plus" size={24} color="black" />
                  </Pressable>
                </View>
                <Pressable
                onPress={() => deleteItem(item)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: "#C0C0C0",
                  borderWidth: 0.6,
                }}
              >
                <Text>Delete</Text>
              </Pressable>
              </Pressable>
            </View>
          ))}
        </View>


      </ScrollView>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
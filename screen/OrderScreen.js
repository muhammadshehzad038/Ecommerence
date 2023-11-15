import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimatedLottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
      setTimeout(() => {
        navigation.replace("Main");
      }, 1500);
    }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <AnimatedLottieView
        source={require("../assets/thumbs.json")}
        // ref={animation}
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your Order Has been Recieved
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Thanks For Shopping
      </Text>
      <AnimatedLottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
       <AnimatedLottieView
        source={require("../assets/tick.json")}
        // ref={animation}
        style={{
          height: 100,
          width: 100,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  )
}

export default OrderScreen
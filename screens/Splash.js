import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import Logo from "../assets/splash.png";
import Loading from "../assets/image.png";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Register");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={Logo}
        style={{ width: 316, height: 316,marginTop:80 }}
      />
      <Text style={{ color: "#43766c", fontWeight: "900", fontSize: 40 }}>
        DOG
      </Text>
      <Text style={{ color: "#43766c", fontWeight: "900", fontSize: 40 }}>
        WALKER
      </Text>

      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <Image source={Loading} style={{ width: 90, height: 70 }} />
      </View>
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Verification({navigation}) {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "500",
          color: "#43766C",
          marginTop: 30,
        }}
      >
        DOG WALKER
      </Text>
      <View style={styles.container}>
        <View style={{ height: 80, width: 300 }}>
          <Text style={styles.text}>OTP Verification</Text>
          <Text style={styles.subText}>
            Enter the verification code we just sent on your phone number.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
              width: "100%",
            }}
          >
            {otp.map((value, index) => (
              <View
                key={index}
                style={{
                  width: 65,
                  height: 60,
                  backgroundColor: "#43766C",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    fontSize: 24,
                    color: "#fff",
                  }}
                  value={value}
                  onChangeText={(text) => handleChange(text, index)}
                  maxLength={1}
                  keyboardType="numeric"
                  placeholderTextColor="#fff"
                />
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("new-password")} style={styles.button}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
          <Text
            style={styles.linkText}
            
          >
            Did't recieve code?{" "}
            <Text style={{ color: "#43766C" }}> Resend</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "#43766C",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "#43766C",
  },
  linkText: {
    textAlign: "center",
    marginTop: 10,
    color: "pink",
    textDecorationLine: "none",
  },
  button: {
    backgroundColor: "#b19470", // Set background color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Center text horizontally
    justifyContent: "center",
    width: "100%", // Center text vertically
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
  },
});

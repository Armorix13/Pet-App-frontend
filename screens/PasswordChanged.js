import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import PasswordChnage from "../assets/passwordchanged.png";
import Pet from "../assets/Pet.png";

export default function PasswordChanged({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={PasswordChnage}
          style={{ width: 251, height: 301, position: "relative" }}
        />
        <Image
          source={Pet}
          style={{
            width: 200,
            height: 250,
            position: "absolute",
            marginBottom: 50,
          }}
        />
      </View>

      <Text style={styles.text}>Password changed</Text>
      <Text style={{ textAlign: "center", fontSize: 12 }}>
        Your password has been changed successfully.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "#43766C",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#b19470", // Set background color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Center text horizontally
    justifyContent: "center",
    width: "70%", // Center text vertically
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
  },
});

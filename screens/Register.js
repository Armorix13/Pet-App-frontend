import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ReusableInput from "../component/Input";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "500", color: "#43766C" }}>
        DOG WALKER
      </Text>
      <Text
        style={{
          fontSize: 40,
          textAlign: "left",
          fontWeight: "800",
          color: "#43766C",
          width: "100%",
        }}
      >
        Register your account
      </Text>
      <View
        style={{
          width: "100%",
          flex: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReusableInput placeholder={"Full Name"} />
        <ReusableInput placeholder={"Phone Number"} />
        <ReusableInput placeholder={"Enter  Password"} secureTextEntry={true} />
        <ReusableInput
          placeholder={"Confirm Password"}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.orLine}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine}></View>
        </View>

        <View style={styles.button1}>
          <Entypo name="facebook-with-circle" size={24} color="white" />
          <Text style={styles.buttonText}> Connect with Facebook</Text>
        </View>
        <View style={styles.button2}>
          <FontAwesome name="google" size={24} color="black" />
          <Text style={styles.buttonText2}> Connect with Google</Text>
        </View>
        <View style={styles.button3}>
          <FontAwesome6 name="apple" size={24} color="white" />
          <Text style={styles.buttonText3}> Connect with apple</Text>
        </View>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?{" "}
          <Text style={{ color: "#43766C" }}> Login Now</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  button1: {
    flexDirection: "row", // Align items horizontally (icon and text)
    backgroundColor: "#3B5998", // Facebook blue color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Vertically center the icon and text
    justifyContent: "center", // Center the content in the button
    width: "100%", // Full width button
  },
  button2: {
    flexDirection: "row", // Align items horizontally (icon and text)
    backgroundColor: "#ffffff", // Facebook blue color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Vertically center the icon and text
    justifyContent: "center", // Center the content in the button
    width: "100%", // Full width button,
    borderBlockColor: "black", //
    borderWidth: 2,
    marginTop: 20,
  },
  button3: {
    flexDirection: "row", // Align items horizontally (icon and text)
    backgroundColor: "black", // Facebook blue color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Vertically center the icon and text
    justifyContent: "center", // Center the content in the button
    width: "100%", // Full width button,
    borderBlockColor: "black", //
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
  },
  buttonText2: {
    color: "black", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
  },
  buttonText3: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd", // Light gray line
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: "#777", // Gray text for "OR"
  },

  //   border: {
  //     borderWidth: 2,
  //     borderColor: "cyan",
  //     borderRadius: 15,
  //     padding: 20,
  //     margin: 10,
  //   },
  linkText: {
    marginTop: 10,
    color: "pink",
    textDecorationLine: "none",
  },
});

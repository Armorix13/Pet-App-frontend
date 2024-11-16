import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ReusableInput from "../component/Input";

export default function Forget({ navigation }) {
  return (
    <View style={styles.outside}>
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
        <Text
          style={{
            fontSize: 40,
            textAlign: "left",
            fontWeight: "800",
            color: "#43766C",
            width: "100%",
          }}
        >
          Forget Password
        </Text>
        <View
          style={{
            width: "100%",
            flex: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReusableInput placeholder={"Phone Number"} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outside: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  container: {
    display: "flex",
    height: "80%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20
    marginBottom: 100,
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

  buttonText: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
    marginLeft: 10, // Add space between the icon and text
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

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Expo Icon import

export default function NewPassword({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>DOG WALKER</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Create new password</Text>
          <Text style={styles.subText}>
            Your new password must be unique from those previously used
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={toggleConfirmPasswordVisibility}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("password-changed")}
            style={styles.button}
          >
            <Text
              style={styles.buttonText}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#43766C",
    marginTop: 30,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  inputContainer: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "#43766C",
  },
  subText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
    textAlign: "center",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    paddingLeft: 15,
    paddingRight: 40, // Space for the icon
    borderColor: "#43766C",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  iconWrapper: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  button: {
    backgroundColor: "#b19470",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

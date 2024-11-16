import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../component/Header";

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header title={"Profile"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default ProfileScreen;

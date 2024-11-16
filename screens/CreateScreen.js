import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../component/Header";

function CreateScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header title={"Create Walk"}/>
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

export default CreateScreen;

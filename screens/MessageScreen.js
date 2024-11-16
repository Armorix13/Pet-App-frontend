import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../component/Header";

function MessageScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header title={"Messages"}/>
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

export default MessageScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../component/Header";
import Search from "../component/Search";
import User from "../component/User";

function SearchScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header title={"Search Friends"} />
      <View style={styles.searchComp}>
        <Search />
        <User name={"Milan"} DogName={"Das"} />
        <User name={"Rohit"} DogName={"Golu"} />
        <User name={"AKash"} DogName={"Buddy"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  searchComp: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default SearchScreen;

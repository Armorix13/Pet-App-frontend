import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import SearchLogo from "../assets/Search.png";

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter user name to search" style={styles.input} />
      <TouchableOpacity style={styles.searchLogo}>
        <Image source={SearchLogo} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 50,
    borderRadius: 20,
    position: "relative",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    display: "flex",
  },
  input: {
    marginLeft: 10,
  },
  searchLogo: {
    borderRadius: 5,
    justifyContent: "center",
    borderColor: "white",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "absolute",
    right: 12,
  },
});

export default Search;

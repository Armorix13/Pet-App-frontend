import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Dummy from "../assets/Dummy.png";

export default function User({ name, DogName }) {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image source={Dummy} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.dogLabel}>Pet Name</Text>
        </View>
        <Text style={styles.dogName}>{DogName}</Text>
      </View>
      <View
        style={{ width: "100%", position: "absolute", right: -230, top: 70 }}
      >
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 110,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    position: "relative",
  },
  upper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C423F",
  },
  dogLabel: {
    fontSize: 12,
    color: "#2C423F",
  },
  dogName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C423F",
    marginTop: 20,
  },
  requestButton: {
    alignSelf: "flex-start",
    backgroundColor: "#43766C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    right: 5,
  },
  requestButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Logo from "../assets/HeaderLogo.png";

const CommentComponent = () => {
  return (
    <View style={styles.commentContainer}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "white",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Image source={Logo} style={styles.avatar} />
      </View>

      <View style={styles.content}>
        <Text style={styles.username}>
          Smith <Text style={styles.time}>5 minutes ago</Text>
        </Text>
        <Text style={styles.commentText}>
          Yes I will come with you for a walk
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    padding: 7,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  time: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#ddd",
  },
  commentText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 2,
  },
});

export default CommentComponent;

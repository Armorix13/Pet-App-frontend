import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import CommentComponent from "../component/CommentComponent";
import Send from "../assets/Send.png";

const CommentScreen = () => {
  return (
    <View
      style={{
        width: 342,
        backgroundColor: "#43766C",
        borderRadius: 20,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 18, color: "#ffffff", margin: 10 }}>
        All comments
      </Text>
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 20,

          position: "relative",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderWidth: 0,
            // width: "100%",
            borderRadius: 5,
            backgroundColor: "white",
          }}
          placeholder="Add a comment..."
        />

        <TouchableOpacity
          style={{
            borderRadius: 5,
            justifyContent: "center",
            borderColor: "white",
            alignItems: "center",
            backgroundColor: "#ffffff",
            position: "absolute",
            right: 25,
          }}
        >
          <Image source={Send} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentScreen;

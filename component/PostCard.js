import { View, Text, Image, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CommentScreen from "../screens/Comment";

export default function PostCard() {
  const [showComment, setShowComment] = useState(false);

  const toggleComment = () => {
    setShowComment((prev) => {
      return !prev;
    });
  };

  const image =
    "https://sewjo-app-backend.onrender.com/image/1731586243301-Post.png";

  return (
    <>
      <View style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Sia Williams</Text>
          <View
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>DOG Name : </Text>
            <Text style={{ fontWeight: "700" }}>LEO</Text>
          </View>
          <Text>Going to take my dog for walk in 10 mins</Text>
          <View
            style={{
              backgroundColor: "#43766C",
              borderRadius: 15,
              flexDirection: "row",
              padding: 5,
            }}
          >
            <FontAwesome
              name="location-arrow"
              size={10}
              color="white"
              style={{ marginTop: 1 }}
            />
            <View style={{ marginLeft: 2 }}>
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontWeight: 100,
                }}
              >
                Starting point
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                }}
              >
                Example street
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <View
              style={{
                width: "50%",
                backgroundColor: "#43766C",
                borderRadius: 15,
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Octicons name="comment" size={14} color="white" />
              <Text
                onPress={toggleComment}
                style={{ color: "#FFFFFF", fontSize: 12, marginLeft: 5 }}
              >
                Comments
              </Text>
            </View>

            <Text
              style={{
                fontSize: 10,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              5 minutes ago
            </Text>
          </View>
        </View>
      </View>
      {showComment && <CommentScreen />}
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 186,
    width: 350,
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignSelf: "center",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: 130,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#FFFAF1",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#43766C",
  },
  author: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: "#AAA",
    marginTop: 5,
  },
});

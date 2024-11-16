import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../component/Header";
import PostCard from "../component/PostCard";

function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 10, 
    width: "100%",   
  },
});

export default HomeScreen;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabItem}
          >
            {route.name === "Create" ? (
              <View
                style={{
                  backgroundColor: isFocused ? "#f97316" : "",
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Add.png")}
                  style={[
                    styles.createTabImage,
                    { tintColor: isFocused ? "#f8fafc" : "#fecaca" },
                  ]}
                />
              </View>
            ) : (
              <Icon
                name={options.tabBarIcon}
                size={24}
                color={isFocused ? "#f8fafc" : "#fecaca"}
              />
            )}
            <Text
              style={{
                color: isFocused ? "#f8fafc" : "#fecaca",
                fontSize: 12,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarContainer: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "#43766C",
    margin: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  createTabImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default CustomTabBar;

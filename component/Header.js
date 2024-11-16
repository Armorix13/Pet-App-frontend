import { View, Text, Image } from "react-native";
import React from "react";
import HeaderLogo from "../assets/HeaderLogo.png";
import Notification from "../assets/Notification.png";

export default function Header({ title }) {
  return (
    <>
      <View style={{ height: 100, borderBottomColor: "black", padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <View>
              <Image source={HeaderLogo} style={{ width: 50, height: 50 }} />
            </View>
            {!title && (
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    color: "#43766C",
                  }}
                >
                  Hii !
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    color: "#43766C",
                  }}
                >
                  Rohit
                </Text>
              </View>
            )}
          </View>
          {title && (
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                justifyContent: "center",
                marginTop: 10,
                color: "#43766C",
              }}
            >
              {title}
            </Text>
          )}
          <View>
            <Image source={Notification} style={{ width: 50, height: 50 }} />
          </View>
        </View>
      </View>
      <Text
        style={{
          height: 0.4,
          width: "100%",
          backgroundColor: "#71717a",
        }}
      ></Text>
    </>
  );
}

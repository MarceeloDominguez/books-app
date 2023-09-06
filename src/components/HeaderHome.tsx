import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderHome() {
  return (
    <View
      style={{
        backgroundColor: "violet",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>Avatar</Text>
      <Ionicons name="search-outline" size={24} color="#fff" />
    </View>
  );
}

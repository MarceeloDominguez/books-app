import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function EmptySearch() {
  return (
    <View style={styles.content}>
      <Image
        source={require("../../assets/reading_book.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: 500,
    resizeMode: "contain",
  },
});

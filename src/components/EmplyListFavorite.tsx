import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

export default function EmplyListFavorite() {
  return (
    <View style={styles.content}>
      <Image
        source={require("../../assets/list-favorite.png")}
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
    height: 600,
    resizeMode: "contain",
  },
});

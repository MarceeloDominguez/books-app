import React from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Book } from "../interfaces/book";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

const { width } = Dimensions.get("window");

type Prop = {
  book: Book;
};

export default function CardBook({ book }: Prop) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.contentImage}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen")}
    >
      <Image source={{ uri: book.cover }} style={styles.image} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.contentIconCard}
        onPress={() => console.log("click corazon...")}
      >
        <Ionicons name="heart-outline" size={24} color="#B70404" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentImage: {
    elevation: 6,
    marginBottom: 8,
    borderRadius: 14,
  },
  image: {
    width: width * 0.5 - 25,
    height: 280,
    borderRadius: 14,
    resizeMode: "stretch",
  },
  contentIconCard: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

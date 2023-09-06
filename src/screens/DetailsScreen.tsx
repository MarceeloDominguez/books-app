import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { RootStackParamsList } from "../navigation/Navigation";
import { COLOR } from "../constants/theme";
import Tag from "../components/Tag";
import Description from "../components/Description";
import Author from "../components/Author";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "DetailsScreen"> {}

const { width } = Dimensions.get("window");

const WIDTH_IMAGE = width * 0.65;

export default function DetailsScreen({ route, navigation }: Prop) {
  const { title, cover, genre, pages, year, synopsis, author } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLOR.backgroundColorPrimary },
      headerTitleAlign: "center",
      headerTitle: title,
      headerTitleStyle: styles.headerTitle,
    });
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentImage}>
        <Image source={{ uri: cover }} style={styles.image} />
      </View>
      <View style={styles.wrapTags}>
        <Tag type="Género:" data={genre} />
        <Tag type="Páginas:" data={pages} />
        <Tag type="Año:" data={year} />
      </View>
      <Description synopsis={synopsis} />
      <Author author={author.name} otherBooks={author.otherBooks} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColorPrimary,
    flex: 1,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 19,
    color: COLOR.textPrimary,
    fontWeight: "600",
  },
  contentImage: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: WIDTH_IMAGE,
    height: 400,
    resizeMode: "stretch",
    borderRadius: 14,
  },
  wrapTags: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 10,
    flexWrap: "wrap",
  },
});

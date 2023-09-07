import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RootStackParamsList } from "../navigation/Navigation";
import { COLOR } from "../constants/theme";
import Tag from "../components/Tag";
import Description from "../components/Description";
import Author from "../components/Author";
import { Ionicons } from "@expo/vector-icons";
import useToggleFavorite from "../hooks/useToggleFavorite";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "DetailsScreen"> {}

const { width } = Dimensions.get("window");

const WIDTH_IMAGE = width * 0.65;

export default function DetailsScreen({ route, navigation }: Prop) {
  const { title, cover, genre, pages, year, synopsis, author } = route.params;
  const book = route.params;

  const { isFavorite, toggleFavorite } = useToggleFavorite(book);

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
        <View>
          <Image source={{ uri: cover }} style={styles.image} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentIconCard}
            onPress={toggleFavorite}
          >
            <Ionicons
              name={isFavorite ? "checkmark" : "add-outline"}
              size={24}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
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
  contentIconCard: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: COLOR.backgroundColorSecondary,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BOOKS from "../data/books.json";
import HeaderHome from "../components/HeaderHome";
import CardBook from "../components/CardBook";
import Slider from "@react-native-community/slider";
import { COLOR } from "../constants/theme";
import { GLOBAL_STYLE } from "../styles/globalStyle";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const [genre, setGenre] = useState<string>("Todos");
  const [pageCountFilter, setPageCountFilter] = useState(0);

  const genres: string[] = Array.from(
    new Set(BOOKS.library.map((book) => book.book.genre))
  );

  const listGenre = ["Todos", ...genres];

  const listBookByGenre =
    genre === "Todos"
      ? BOOKS.library
      : BOOKS.library.filter((book) => book.book.genre === genre);

  const filteredBooks = listBookByGenre.filter(
    (book) => book.book.pages >= pageCountFilter
  );

  const percentage = (pageCountFilter / 700) * 100;

  return (
    <ScrollView
      style={[styles.container, { marginTop: top }]}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        backgroundColor={COLOR.backgroundColorPrimary}
        barStyle="dark-content"
      />
      <HeaderHome />
      <Text style={styles.titleSlider}>
        Libros con más de{" "}
        {Number(pageCountFilter.toFixed(0)) === 0
          ? 43
          : pageCountFilter.toFixed(0)}{" "}
        páginas
      </Text>
      <View style={styles.contentSlider}>
        <Slider
          minimumValue={0}
          maximumValue={700}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor="transparent"
          step={50}
          value={pageCountFilter}
          onValueChange={(value) => setPageCountFilter(value)}
          style={styles.slider}
        />
        <View
          style={[
            styles.barSliderFilter,
            { width: percentage === 0 ? 20 : `${percentage}%` },
          ]}
        />
        <View style={styles.barSlider} />
      </View>
      <View style={styles.wrapListCategory}>
        {listGenre.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.buttonCategory,
              {
                backgroundColor:
                  genre === item
                    ? COLOR.backgroundColorSecondary
                    : COLOR.backgroundColorPrimary,
              },
            ]}
            activeOpacity={0.8}
            onPress={() => setGenre(item)}
          >
            <Text
              style={[
                styles.genre,
                { color: genre === item ? COLOR.textPrimary : "#747171" },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={GLOBAL_STYLE.wrapItems}>
        {filteredBooks.map((item) => (
          <CardBook key={item.book.ISBN} book={item.book} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLOR.backgroundColorPrimary,
  },
  wrapListCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingVertical: 10,
  },
  buttonCategory: {
    paddingVertical: 8,
    borderRadius: 100,
    paddingHorizontal: 15,
    elevation: 6,
  },
  genre: {
    fontWeight: "bold",
    letterSpacing: 0.3,
    fontSize: 14,
    textTransform: "capitalize",
  },
  //slider
  titleSlider: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginTop: 10,
    color: COLOR.textPrimary,
  },
  contentSlider: {
    marginVertical: 10,
  },
  slider: {
    zIndex: 2,
    width: "100%",
    height: 12,
  },
  barSlider: {
    backgroundColor: "#dfd6d6",
    height: 12,
    position: "absolute",
    zIndex: 0,
    width: "100%",
    borderRadius: 5,
  },
  barSliderFilter: {
    backgroundColor: COLOR.backgroundColorSecondary,
    height: 12,
    position: "absolute",
    zIndex: 1,
    borderRadius: 5,
  },
});

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BOOKS from "../data/books.json";
import HeaderHome from "../components/HeaderHome";
import CardBook from "../components/CardBook";
import Slider from "@react-native-community/slider";

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

  const porcentaje = (pageCountFilter / 700) * 100;

  return (
    <ScrollView
      style={[styles.container, { marginTop: top }]}
      showsVerticalScrollIndicator={false}
    >
      <HeaderHome />
      <Text>
        Libros con mas de{" "}
        {Number(pageCountFilter.toFixed(0)) === 0
          ? 43
          : pageCountFilter.toFixed(0)}{" "}
        páginas
      </Text>
      <View>
        <Slider
          minimumValue={0}
          maximumValue={700}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor="transparent"
          step={50}
          value={pageCountFilter}
          onValueChange={(value) => setPageCountFilter(value)}
          style={{ zIndex: 1, width: "100%" }}
        />
        <View
          style={{
            backgroundColor: "red",
            height: 20,
            position: "absolute",
            zIndex: 0,
            width: porcentaje === 0 ? 20 : `${porcentaje}%`,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={styles.wrapListCategory}>
        {listGenre.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.buttonCategory,
              { backgroundColor: genre === item ? "#A8DF8E" : "#FFF4F4" },
            ]}
            activeOpacity={0.8}
            onPress={() => setGenre(item)}
          >
            <Text
              style={[
                styles.genre,
                { color: genre === item ? "#191919" : "#747171" },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.wrapItems}>
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
    backgroundColor: "#FFF4F4",
  },
  wrapItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 20,
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
});

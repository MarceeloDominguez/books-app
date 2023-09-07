import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { COLOR } from "../constants/theme";
import { GLOBAL_STYLE } from "../styles/globalStyle";
import CardBook from "../components/CardBook";
import EmplyListFavorite from "../components/EmplyListFavorite";

export default function FavoriteScreen() {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        {favorites.length === 0
          ? "No tienes libros para leer"
          : `Tu lista de libros (${favorites.length})`}
      </Text>
      {favorites.length === 0 ? (
        <EmplyListFavorite />
      ) : (
        <View style={GLOBAL_STYLE.wrapItems}>
          {favorites.map((item) => (
            <CardBook key={item.ISBN} book={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColorPrimary,
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: COLOR.textPrimary,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
});

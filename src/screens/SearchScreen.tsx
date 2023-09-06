import React, { useEffect } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { COLOR } from "../constants/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import useSearch from "../hooks/useSearch";
import CardBook from "../components/CardBook";
import { GLOBAL_STYLE } from "../styles/globalStyle";
import EmptySearch from "../components/EmptySearch";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "SearchScreen"> {}

export default function SearchScreen({ navigation }: Prop) {
  const { searchTerm, setSearchTerm, searchData: searchBooks } = useSearch();

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLOR.backgroundColorPrimary },
      headerTitleAlign: "center",
      headerTitle: "Libros de Lectura",
      headerTitleStyle: styles.titleHeader,
    });
  }, []);

  return (
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapInput}>
        <TextInput
          placeholder="Buscar un libro..."
          style={styles.input}
          value={searchTerm}
          onChangeText={(value) => setSearchTerm(value)}
        />
      </View>
      {!searchTerm ? (
        <EmptySearch />
      ) : (
        <View style={GLOBAL_STYLE.wrapItems}>
          {searchBooks.map((item) => (
            <CardBook key={item.book.ISBN} book={item.book} />
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
  wrapInput: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#ebdddd",
  },
  titleHeader: {
    fontSize: 15,
    color: COLOR.textPrimary,
    fontWeight: "600",
  },
});

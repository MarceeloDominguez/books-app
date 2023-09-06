import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOR } from "../constants/theme";
import Tag from "./Tag";

type Prop = {
  author: string;
  otherBooks: string[];
};

export default function Author({ author, otherBooks }: Prop) {
  return (
    <View style={styles.content}>
      <Text style={styles.author}>Autor: {author}</Text>
      {otherBooks.length > 0 && (
        <>
          <Text style={styles.subtitle}>{author} También escribió</Text>
          <View style={styles.wrapTags}>
            {otherBooks.map((item) => (
              <Tag key={item} data={item} />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 30,
  },
  author: {
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.3,
    lineHeight: 20,
    color: "#4e4b4b",
    marginBottom: 10,
    fontStyle: "italic",
  },
  wrapTags: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.3,
    lineHeight: 20,
    color: COLOR.textPrimary,
    marginBottom: 8,
  },
});

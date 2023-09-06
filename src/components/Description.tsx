import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOR } from "../constants/theme";

type Prop = {
  synopsis: string;
};

export default function Description({ synopsis }: Prop) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Descripción</Text>
      <Text style={styles.synopsis}>{synopsis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 0.3,
    color: COLOR.textPrimary,
    fontWeight: "bold",
  },
  synopsis: {
    fontSize: 15,
    letterSpacing: 0.3,
    color: COLOR.textPrimary,
    fontWeight: "600",
    lineHeight: 22,
  },
});

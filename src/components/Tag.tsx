import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOR } from "../constants/theme";

type Prop = {
  type?: string;
  data: string | number;
};

export default function Tag({ type, data }: Prop) {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        {type} {data}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLOR.backgroundColorSecondary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    elevation: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: COLOR.textPrimary,
    textTransform: "capitalize",
  },
});

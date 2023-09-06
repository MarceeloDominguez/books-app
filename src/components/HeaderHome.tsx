import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function HeaderHome() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.content}>
      <Image
        source={{ uri: "https://randomuser.me/portraits/men/15.jpg" }}
        style={styles.avatar}
      />
      <Ionicons
        name="search-outline"
        size={24}
        color={COLOR.textPrimary}
        onPress={() => navigation.navigate("SearchScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.backgroundColorSecondary,
  },
});

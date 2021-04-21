import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Welcome } from "./src/pages/welcome";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Text>{}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

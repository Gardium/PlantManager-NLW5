import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image } from "react-native";

import { Button } from "../components/Button";
import watering from "../assets/watering.png";
import colors from "../styles/colors";
export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas{"\n"}
        de forma fácil
      </Text>
      {visible && <Image source={watering} style={styles.img} />}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title=">" onPress={handleVisibility} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 38,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  img: {
    width: 292,
    height: 284,
  },
});

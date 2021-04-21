import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";

interface buttonProps extends TouchableOpacityProps {
  title: string;
}
export function Button({ title, ...rest }: buttonProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});

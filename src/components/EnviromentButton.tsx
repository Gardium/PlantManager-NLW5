import React from "react";

import { StyleSheet, Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <RectButton
      style={[styles.button, active && styles.buttonActive]}
      {...rest}
    >
      <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  buttonTextActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
  buttonText: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
});

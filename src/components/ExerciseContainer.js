import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from '../theme';
import { Checkbox } from "./Checkbox";

export const ExerciseContainer = ({ onPress, exerciseTitle = "Empty Name" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.exerciseContainer} activeOpacity={theme.ACTIVE_OPACITY}>
      <Text style={styles.exerciseText}>{exerciseTitle}</Text>
      <Checkbox color="black"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: theme.CARD_STYLE,
  exerciseText: {
    fontSize: 18,
    fontWeight: "bold"
  },
})
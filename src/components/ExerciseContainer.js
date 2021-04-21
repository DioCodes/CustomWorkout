import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from '../theme';
import { Checkbox } from "./Checkbox";

export const ExerciseContainer = ({ onPress, exerciseTitle = "Empty Name", isCompleted, isCheckBoxDisabled }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.exerciseContainer} activeOpacity={theme.ACTIVE_OPACITY}>
      <Text 
        style={[
          styles.exerciseText, 
          { 
            textDecorationLine: isCompleted ? 'line-through' : 'none', 
            color: isCompleted ? "grey" : "#000"
          }
        ]}
      >
        {exerciseTitle}
      </Text>
      {isCompleted ? 
        <Checkbox iconChecked="checkmark" color="black" isCompleted={isCompleted} isDisabled={isCheckBoxDisabled}/> 
        : null
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: theme.CARD_STYLE,
  exerciseText: theme.BUTTON_TEXT
})
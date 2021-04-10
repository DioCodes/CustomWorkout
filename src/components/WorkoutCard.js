import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

export const WorkoutCard = ({ onPress, cardName = "Back Workout" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.workoutCardContainer} activeOpacity={theme.ACTIVE_OPACITY}>
      <Text style={styles.workoutCardText}>{cardName}</Text>
      <Ionicons name="arrow-forward" size={26} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  workoutCardContainer: theme.CARD_STYLE,
  workoutCardText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';

export const CompleteButton = ({ navigation, buttonText }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.exerciseDone} activeOpacity={theme.ACTIVE_OPACITY}>
      <Text style={styles.exerciseDoneText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  exerciseDone: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15
  },
  exerciseDoneText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold'
  },
})
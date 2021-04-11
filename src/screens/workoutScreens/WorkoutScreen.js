import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { CompleteButton } from '../../components/CompleteButton';
import { Checkbox } from '../../components/Checkbox';

export const WorkoutScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Тренировка на грудь",
    })
  }, [])

  const ExerciseContainer = ({ onPress, exerciseName = "Empty Name" }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.exerciseContainer} activeOpacity={theme.ACTIVE_OPACITY}>
        <Text style={styles.exerciseText}>{exerciseName}</Text>
        <Checkbox color="black"/>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.workoutContainer}>
      {/* Надо заставить работать скролл и используй FlatList */}
      <View style={styles.workoutWrapper}>
        <ExerciseContainer exerciseName="Отжимания" onPress={() => navigation.push("Exercise")}/>
        <ExerciseContainer exerciseName="Узкие отжимания" onPress={() => navigation.push("Exercise")}/>
      </View>

      <CompleteButton navigation={navigation} buttonText="Завершить тренировку" />
    </View>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 30
  },

  exerciseContainer: theme.CARD_STYLE,
  exerciseText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  workoutDone: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 15,
  },
  workoutDoneText: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold'
  }
})
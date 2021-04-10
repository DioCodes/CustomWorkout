import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

export const WorkoutScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Тренировка спины",
    })
  }, [])

  const ExerciseContainer = ({ onPress, exerciseName = "Empty Name", isCompleted = false }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.exerciseContainer} activeOpacity={theme.ACTIVE_OPACITY}>
        <Text style={styles.workoutText}>{ exerciseName }</Text>
        <Ionicons name={isCompleted ? "md-checkmark-circle-sharp" : "ellipse-outline"} size={26} color="black" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.workoutContainer}>
      {/* Надо заставить работать скролл и используй FlatList */}
      <ExerciseContainer onPress={() => navigation.navigate("Exercise")} exerciseName="Подтягивания с полотенцем" isCompleted />
      <ExerciseContainer exerciseName="Отжимания" />

      <View style={styles.workoutDone}>
        <Text style={styles.workoutDoneText}>Завершить тренировку</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  exerciseContainer: theme.CARD_STYLE,

  workoutDone: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 30
  },
  workoutDoneText: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold'
  }
})
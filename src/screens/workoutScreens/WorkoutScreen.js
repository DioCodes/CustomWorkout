import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { completeWorkout, deleteWorkout } from '../../store/actions/workoutsActions';

import { CompleteButton } from '../../components/CompleteButton';
import { ExerciseContainer } from '../../components/ExerciseContainer';
import { useIsFocused } from '@react-navigation/core';
import { AppHeader } from '../../components/AppHeader';

export const WorkoutScreen = ({ route, navigation }) => {
  const {workoutId, workoutIndex} = route.params;
  let workout = useSelector((state) => state.workouts.workouts[workoutIndex]);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const deleteThisWorkout = () => {
    Alert.alert(
      "Удаление",
      "Вы действительно хотите удалить тренировку?",
      [
        {
          text: "Отмена",
          onPress: () => {},
          style: "cancel",
        },
        { 
          text: "Удалить", 
          onPress: () => {
            navigation.goBack();
            dispatch(deleteWorkout(workoutId));
          },
          style: "destructive",
        }
      ],
      { cancelable: false }
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions(
      AppHeader(
        workout.workoutTitle, 
        'md-trash-outline', 
        deleteThisWorkout, 
        false
      )
    );
  }, []);
  
  const onCompletePress = () => {
    dispatch(completeWorkout(workoutId));
    navigation.goBack();
  }

  let renderItem = ({ item, index }) => {
    return (
      <ExerciseContainer 
        exerciseTitle={item.title} 
        onPress={() => {
          navigation.navigate("Exercise", {
            exerciseTitle: item.title,
            exerciseGifExample: item.gifExample,
            exerciseSets: item.sets,
            exerciseReps: item.reps,
            exerciseRestInSec: item.restInSec,
            workoutId: workoutId,
            exerciseIndex: index.toString()
          })
        }}
        isCompleted={item.isCompleted}
        isCheckBoxDisabled={true}
      />
    );
  }
  
  return (
    <View style={styles.workoutContainer}>
      { isFocused ?
        // Единственный способ, что зарабаотал, чтобы обновить FlatList
        <FlatList
          data={workout.exercises}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        /> :
        <View />
      }
      <CompleteButton 
        buttonText={'Завершить тренировку'} 
        onPress={() => onCompletePress()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 10,
  },
})
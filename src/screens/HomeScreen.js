import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createWorkout, deleteWorkout } from '../store/actions/workoutsActions';
import { AppHeader } from '../components/AppHeader';
import { WorkoutCard } from '../components/WorkoutCard';

export const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      AppHeader("Мои тренировки", "md-add-circle-outline", () => navigation.navigate("CreateWorkout"))
    );
  }, [])
  
  const dispatch = useDispatch();
  let workouts = useSelector(state => state.workouts.workouts);

  useEffect(() => {
    // dispatch(deleteWorkout());
    // dispatch(createWorkout("TEST ONE", MAN_STRONG_TWO, EXERCISES_DATA));
  }, [])

  const onRenderItemPress = (item, index) => {
    navigation.navigate("Workout", { 
      workoutId: item.workoutId, 
      workoutIndex: index, 
      workoutTitle: item.workoutTitle, 
      exercises: item.exercises 
    })
  }

  const renderItem = ({ item, index }) => {
    return (
      <WorkoutCard
        cardName={item.workoutTitle}
        imgPath={item.workoutImg}
        onPress={() => onRenderItemPress(item, index)}
      /> 
    );
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList 
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    paddingHorizontal: 20
  }
})
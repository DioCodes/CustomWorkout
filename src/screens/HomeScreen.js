import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PUSH_UPS } from '../../assets/gifs/gifs';
import { IMAGE_BUTT, MAN_STRONG_THREE, MAN_STRONG_TWO } from '../../assets/imgs/images';
import { AppHeader } from '../components/AppHeader';
import { WorkoutCard } from '../components/WorkoutCard';
import { createWorkout, deleteWorkout } from '../store/actions/workoutsActions';

export const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      AppHeader("Мои тренировки", "add-circle-sharp", () => navigation.navigate("CreateWorkout"))
    );
  }, [])
  
  const dispatch = useDispatch();
  let works = useSelector(state => state.workouts.workouts);
  
  const EXERCISES_DATA = [
    {
      title: "Отжимания",
      gifExample: PUSH_UPS,
      sets: 3,
      reps: 15,
      restInSec: 120
    },
    {
      title: "Узкие отжимания",
      gifExample: MAN_STRONG_TWO,
      sets: 3,
      reps: 10,
      restInSec: 30
    },
  ]

  useEffect(() => {
    // dispatch(deleteWorkout());
    // dispatch(createWorkout("TEST ONE", MAN_STRONG_TWO, EXERCISES_DATA));
  }, [])

  const onRenderItemPress = (item) => {
    console.log(item)
    navigation.navigate("Workout", {workoutTitle: item.workoutTitle, exercises: item.exercises})
  }

  const renderItem = ({ item }) => {
    return (
      <WorkoutCard
        cardName={item.workoutTitle}
        imgPath={item.workoutImg}
        onPress={() => onRenderItemPress(item)}
      /> 
    );
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList 
        data={works}
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
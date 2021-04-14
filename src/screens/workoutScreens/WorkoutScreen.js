import React, { useLayoutEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { CompleteButton } from '../../components/CompleteButton';
import { Checkbox } from '../../components/Checkbox';
import { IMAGE_BUTT, MAN_STRONG_ONE, MAN_STRONG_TWO, MAN_STRONG_THREE } from '../../../assets/imgs/images';
import { PUSH_UPS } from '../../../assets/gifs/gifs';
import theme from '../../theme';
import { ExerciseContainer } from '../../components/ExerciseContainer';

export const WorkoutScreen = ({ route, navigation }) => {
  const {workoutTitle, exercises} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: workoutTitle,
    })
  }, []);

  const renderItem = ({ item }) => {
    console.log(item.title)
    return (
      <ExerciseContainer 
        exerciseTitle={item.title} 
        onPress={() => navigation.navigate("Exercise", {
          exerciseTitle: item.title,
          exerciseGifExample: item.gifExample,
          exerciseSets: item.sets,
          exerciseReps: item.reps,
          exerciseRestInSec: item.restInSec
        })} 
      />
    );
  }

  return (
    <View style={styles.workoutContainer}>
      {/* Надо заставить работать скролл и используй FlatList */}
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
      />

      <CompleteButton buttonText="Завершить тренировку" onPress={() => navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    // paddingBottom: 30
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
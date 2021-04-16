import { ADD_WORKOUT, DELETE_WORKOUT, COMPLETE_EXERCISE, COMPLETE_WORKOUT } from '../types';

export const createWorkout = (workoutId, workoutTitle, workoutImg, workoutExercises) => {
  return {
    type: ADD_WORKOUT,
    workoutId: workoutId,
    workoutTitle: workoutTitle,
    workoutImg: workoutImg,
    exercises: workoutExercises
  }
};

export const completeExercise = (exerciseWorkoutId, exerciseIndex) => {
  return {
    type: COMPLETE_EXERCISE,
    exerciseWorkoutId: exerciseWorkoutId,
    exerciseIndex: exerciseIndex,
  }
};

export const completeWorkout = (workoutId) => {
  return {
    type: COMPLETE_WORKOUT,
    workoutId: workoutId,
  }
};

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    workoutId: workoutId
  }
};
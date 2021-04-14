import { ADD_WORKOUT, DELETE_WORKOUT } from '../types';

export const createWorkout = (workoutTitle, workoutImg, workoutExercises) => {
  return {
    type: ADD_WORKOUT,
    workoutTitle: workoutTitle,
    workoutImg: workoutImg,
    exercises: workoutExercises
  }
};

export const deleteWorkout = () => {
  return {
    type: DELETE_WORKOUT,
  }
};
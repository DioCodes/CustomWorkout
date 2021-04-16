import { ADD_WORKOUT, COMPLETE_EXERCISE, COMPLETE_WORKOUT, DELETE_WORKOUT } from "../types";

const INITIAL_STATE = {
  workouts: []
};

// {
//   workoutTitle: "Мощные руки",
//   workoutImg: MAN_STRONG_THREE,
//   exercises: [
//     {
//       title: "Отжимания",
//       gifExample: PUSH_UPS,
//       sets: 3,
//       reps: 15,
//       restInSec: 120
//     },
//     {
//       title: "Узкие отжимания",
//       gifExample: PUSH_UPS,
//       sets: 3,
//       reps: 10,
//       restInSec: 30
//     }
//   ]
// },

export const workoutsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [
          ...state.workouts,
          {
            workoutId: action.workoutId,
            workoutTitle: action.workoutTitle,
            workoutImg: action.workoutImg,
            exercises: action.exercises
            // exercises: [
            //   {
            //     title: "Отжимания",
            //     gifExample: PUSH_UPS,
            //     sets: 3,
            //     reps: 15,
            //     restInSec: 120
            //     isCompleted: true
            //   },
            //   {
            //     title: "Узкие отжимания",
            //     gifExample: PUSH_UPS,
            //     sets: 3,
            //     reps: 10,
            //     restInSec: 30
            //     isCompleted: false
            //   }
            // ]
          }
        ]
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter((workout) => {
          return workout.workoutId !== action.workoutId
        }),
      };
    case COMPLETE_EXERCISE:
      state.workouts.filter((workout) => {
        Object.keys(workout.exercises).forEach((key) => {
          if (workout.workoutId === action.exerciseWorkoutId && key === action.exerciseIndex) {
            workout.exercises[key].isCompleted = true;
          }
        });
      });
      return {
        ...state,
        workouts: state.workouts
      }
    case COMPLETE_WORKOUT:
      state.workouts.filter((workout) => {
        Object.keys(workout.exercises).forEach((key) => {
          if (workout.workoutId === action.workoutId) {
            workout.exercises[key].isCompleted = false;
          }
        });
      });
      return {
        ...state,
        workouts: state.workouts
      }
    default:
      return state 
  }
};
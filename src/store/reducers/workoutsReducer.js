import { ADD_WORKOUT, DELETE_WORKOUT } from "../types";

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
            //   },
            //   {
            //     title: "Узкие отжимания",
            //     gifExample: PUSH_UPS,
            //     sets: 3,
            //     reps: 10,
            //     restInSec: 30
            //   }
            // ]
          }
        ]
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: INITIAL_STATE.workouts
      };
    default:
      return state 
  }
};
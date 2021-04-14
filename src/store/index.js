import { combineReducers } from 'redux';
import { workoutsReducer } from "./reducers/workoutsReducer";


export const rootReducer = combineReducers({
  workouts: workoutsReducer
});
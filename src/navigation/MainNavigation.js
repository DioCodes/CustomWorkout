import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators 
} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { StatusBar } from 'react-native';
import { WorkoutScreen } from '../screens/workoutScreens/WorkoutScreen';
import { ExerciseScreen } from '../screens/workoutScreens/ExerciseScreen';
import { CreateWorkoutScreen } from '../screens/createWorkoutScreens/CreateWorkoutScreen';
import { WorkoutImagesListScreen } from '../screens/createWorkoutScreens/WorkoutImagesListScreen';
import { CreateExerciseScreen } from '../screens/createWorkoutScreens/CreateExerciseScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';

export const MainNavigation = () => {
  const Stack = createStackNavigator();

  const modalOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
    ...TransitionPresets.ModalPresentationIOS,
    cardStyle: {
      marginTop: 20,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      backgroundColor: "rgb(255, 255, 255)"
    },
  };

  const MainStack = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          headerTintColor: 'white',
          headerBackTitle: 'Назад',

          headerStyle: {
            backgroundColor: 'black',
            shadowColor: 'transparent',
            elevation: 0,
          },
          cardStyle: {
            // marginTop: 10,
            backgroundColor: "#000000"
          },

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        headerMode="screen"
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen}/>
        <Stack.Screen name="CreateExercise" component={CreateExerciseScreen} />
        <Stack.Screen name="WorkoutImagesList" component={WorkoutImagesListScreen} />
        {/* Тут можно сделать лучше навигацию, в будущем с BottomTabs будет понятней как именно */}
        <Stack.Screen name="Workout" component={WorkoutScreen}/>
        <Stack.Screen name="Exercise" component={ExerciseScreen}/>
      </Stack.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <MainStack/>
    </NavigationContainer>
  );
}
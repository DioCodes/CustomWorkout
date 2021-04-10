import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { StatusBar } from 'react-native';
import { WorkoutScreen } from '../screens/workoutScreens/WorkoutScreen';
import { ExerciseScreen } from '../screens/workoutScreens/ExerciseScreen';

export const MainNavigation = () => {
  const Stack = createStackNavigator();

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
        backgroundColor: 'black',
        shadowColor: 'transparent',
        elevation: 0
      }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Тут можно сделать лучше навигацию, в будущем с BottomTabs будет понятней как именно */}
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
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
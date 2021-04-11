import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WorkoutCard } from '../components/WorkoutCard';

export const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Мои тренировки",
    })
  }, [])

  return (
    <View style={styles.mainContainer}>
      <WorkoutCard onPress={() => navigation.navigate("Workout")} cardName="Тренировка на грудь"/>
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
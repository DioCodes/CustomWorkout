import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

export const WorkoutCard = ({ onPress, cardName = "Back Workout", imgPath }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.workoutCardContainer} activeOpacity={theme.ACTIVE_OPACITY}>
      <Image source={{uri: imgPath}} style={styles.img}/>

      <View style={styles.workoutCardButton}>
        <Text style={styles.workoutCardText}>{cardName}</Text>
        <Ionicons name="arrow-forward" size={26} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  workoutCardContainer: {
    width: "100%",
    height: 225,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
  },
  workoutCardButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  workoutCardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  img: {
    flex: 1,
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  }
})
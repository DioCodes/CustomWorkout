import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { Checkbox } from '../../components/Checkbox';
import { CompleteButton } from '../../components/CompleteButton';

export const ExerciseScreen = ({ route, navigation }) => {
  const { exerciseTitle, exerciseGifExample, exerciseSets, exerciseReps, exerciseRestInSec } = route.params;
  const [exerciseSetsCards, setExerciseSetsCards] = useState([]);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: exerciseTitle,
    })

    createSets();
  }, [])
  
  let sets = [];
  const createSets = () => {
    for (let i = 1; i <= exerciseSets; i++) {
      sets.push({setNumber: i})
    }
    setExerciseSetsCards(sets)
  }

  const ExerciseSetCard = ({ number }) => {
    return (
      <View style={styles.exerciseSet}>
        <Text style={styles.exerciseSetText}>{number} подход</Text>
        <Checkbox />
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <ExerciseSetCard number={item.setNumber}/>
  );

  return (
    <View style={styles.exerciseContainer}>
      <View style={styles.exerciseExample}>
        {/* <Text>Тут будет 3D анимация как выполнять упражнение, её можно будет выбрать  из списка доступных</Text> */}
        <Image source={{ uri: exerciseGifExample }} style={styles.gif}/>
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.exerciseInfo}>
              <View style={styles.exerciseInfoWrapper}>
                <Text style={styles.exerciseInfoNum}>{exerciseReps}</Text>
                <Text style={styles.exerciseInfoText}>Повторений</Text>
              </View>
              <View style={styles.exerciseInfoWrapper}>
                <Text style={styles.exerciseInfoNum}>{exerciseRestInSec}</Text>
                <Text style={styles.exerciseInfoText}>Отдых(сек)</Text>
              </View>
            </View>
          </>
        }
        data={exerciseSetsCards}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
      />

      <CompleteButton buttonText="Завершить упражнение" onPress={() => navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  exerciseExample: {
    width: "100%",
    height: 220,
    backgroundColor: 'white',
    // backgroundColor: 'red',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20
  },

  exerciseInfo: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  exerciseInfoWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  exerciseInfoNum: {
    fontSize: 24,
    color: "white"
  },
  exerciseInfoText: {
    fontSize: 12,
    color: "white",
    opacity: .5
  },

  exerciseSetsWrapper: {
    // backgroundColor: 'blue',
    marginVertical: 30
  },
  exerciseSet: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'grey',
    marginVertical: 10
  },
  exerciseSetText: {
    fontSize: 18,
    color: "white"
  },

  exerciseDone: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 15
  },
  exerciseDoneText: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold'
  },

  gif: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  }
})
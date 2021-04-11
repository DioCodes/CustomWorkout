import React, { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { Checkbox } from '../../components/Checkbox';
import { CompleteButton } from '../../components/CompleteButton';

export const ExerciseScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Отжимания",
    })
  }, [])

  return (
    <View style={styles.exerciseContainer}>
      <View style={{...styles.exerciseExample, height: 220}}>
        {/* <Text>Тут будет 3D анимация как выполнять упражнение, её можно будет выбрать  из списка доступных</Text> */}
        <Image source={require("../../../assets/gifs/push-ups.gif")} style={styles.gif}/>
      </View>

      <View style={styles.exerciseInfo}>
        <View style={styles.exerciseInfoWrapper}>
          <Text style={styles.exerciseInfoNum}>12</Text>
          <Text style={styles.exerciseInfoText}>Повторений</Text>
        </View>
        <View style={styles.exerciseInfoWrapper}>
          <Text style={styles.exerciseInfoNum}>120</Text>
          <Text style={styles.exerciseInfoText}>Отдых(сек)</Text>
        </View>
      </View>

      <View style={styles.exerciseSetsWrapper}>
        <View style={styles.exerciseSet}>
          <Text style={styles.exerciseSetText}>1 подход</Text>
          <Checkbox />
        </View>
        <View style={styles.exerciseSet}>
          <Text style={styles.exerciseSetText}>2 подход</Text>
          <Checkbox />
        </View>
        <View style={styles.exerciseSet}>
          <Text style={styles.exerciseSetText}>3 подход</Text>
          <Checkbox />
        </View>
      </View>

      <CompleteButton navigation={navigation} buttonText="Завершить упражнение" />
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  exerciseExample: theme.CARD_STYLE,

  exerciseInfo: {
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: 'rgba(255, 255, 255, .5)',
    paddingHorizontal: 20,
    // paddingVertical: 10,
    paddingTop: 10,
    marginTop: 10,
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
    flex:1,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#000',
  }
})
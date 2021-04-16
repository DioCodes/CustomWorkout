import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { gifsArray } from '../../../assets/gifsAndImgsArrays/gifsAndImgsArray';
import { CustomTextInput } from '../../components/CustomTextInput';
import { ImageSelector } from '../../components/ImageSelector';
import { CompleteButton } from '../../components/CompleteButton';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { AppHeader } from '../../components/AppHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const androidHeight = 50;
const iosHeight = 150;

export const CreateExerciseScreen = ({ route }) => {
  const [exerciseTitle, setExerciseTitle] = useState();
  const [selectedExerciseGif, setSelectedExerciseGif] = useState(null);
  const [currentSets, setCurrentSets] = useState(3);
  const [currentReps, setCurrentReps] = useState(12);
  const [currentSecs, setCurrentSecs] = useState(90);
  
  // console.log(exerciseTitle, selectedExerciseGif, currentSets, currentReps, currentSecs)
  const navigation = useNavigation();
  let exercise = {
    title: exerciseTitle,
    gifExample: selectedExerciseGif,
    sets: currentSets,
    reps: currentReps,
    restInSec: currentSecs,
    isCompleted: false,
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Добавить упражнение"
    });
  }, []);

  useEffect(() => {
    if (route.params?.img) {
      setSelectedExerciseGif(route.params?.img)
    }
    
  }, [route.params?.img]);

  useEffect(() => {
    getImg();
  }, []);
  
  const getImg = async () => {
    try {
      const value = await AsyncStorage.getItem('@storingImg');
      if(value !== null) {
        setSelectedExerciseGif(value);
      }
    } catch(e) {
      console.log(e)
    }
  };
  
  const loadNums = (minNum, maxNum, everySec = 1) => {
    let n = [];
  
    for (let i = minNum; i <= maxNum; i += everySec) {
      n.push(
        <Picker.Item key={i} label={`${i}`} value={i} />
      )
    }

    return n;
  };

  const RepeatedPicker = ({ numsRange, value, setValue }) => {
    return (
      <Picker
        style={styles.picker}
        itemStyle={{
          color: "#fff",
          height: Platform.OS == 'android' ? androidHeight : iosHeight,
          // backgroundColor: 'red'
        }}
        mode='dropdown'
        dropdownIconColor={"#ffffff"}
        selectedValue={value}
        onValueChange={(value) => setValue(value)}
      >
        {numsRange}
      </Picker>
    );
  }

  return (
    <View style={styles.createExerciseContainer}>
      <CustomTextInput 
        placeholder="Введите название упражнения" 
        value={exerciseTitle} 
        setValue={setExerciseTitle} 
      />


      <ImageSelector 
        images={gifsArray}
        selectedImage={selectedExerciseGif}
      />

      <View style={styles.createExerciseWrapper}>
        <View style={styles.createExerciseData}>
          <RepeatedPicker value={currentSets} setValue={setCurrentSets} numsRange={loadNums(1, 5)}/>
          <Text style={styles.textDescription}>Подходы</Text>
        </View>
        <View style={styles.createExerciseData}>
          <RepeatedPicker value={currentReps} setValue={setCurrentReps} numsRange={loadNums(1, 15)}/>
          <Text style={styles.textDescription}>Повторения</Text>
        </View>
        <View style={styles.createExerciseData}>
          <RepeatedPicker value={currentSecs} setValue={setCurrentSecs} numsRange={loadNums(30, 120, 5)}/>
          <Text style={styles.textDescription}>Отдых(сек)</Text>
        </View>
      </View>

      <CompleteButton buttonText="Добавить" onPress={() => navigation.navigate("CreateWorkout", {exercise})}/>
    </View>
  )
}

const styles = StyleSheet.create({
  createExerciseContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  createExerciseWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  createExerciseData: {
    backgroundColor: Platform.OS == 'android' ? 'rgba(255, 255, 255, .1)' : 'transparent',
    // backgroundColor: 'rgba(255, 255, 255, .1)',
    alignItems: Platform.OS == 'android' ? 'baseline' : 'center',
    width: Platform.OS == 'android' ? 110 : 120,
    height: Platform.OS == 'android' ? androidHeight : iosHeight,
    borderRadius: 10,
  },

  picker: {
    justifyContent: 'center',
    width: "100%",
    color: '#fff',
  },
  textDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, .25)"
  }
})
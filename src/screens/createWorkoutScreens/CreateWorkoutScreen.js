import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { imagesArray } from '../../../assets/gifsAndImgsArrays/gifsAndImgsArray';
import { idGenerator } from '../../../assets/idGenerator';
import { createWorkout } from '../../store/actions/workoutsActions';

import { Button } from '../../components/Button';
import { WorkoutCard } from '../../components/WorkoutCard';
import { CompleteButton } from '../../components/CompleteButton';
import { ExerciseContainer } from '../../components/ExerciseContainer';
import { CustomTextInput } from '../../components/CustomTextInput';
import { ImageSelector } from '../../components/ImageSelector';

import theme from '../../theme';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateWorkoutScreen = ({ route, navigation }) => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [selectedWorkoutImage, setSelectedWorkoutImage] = useState(null);
  const [exercises, setExercises] = useState([]);

  const isFocused = useIsFocused();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Создание тренировки"
    })
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getImg();

      return () => removeImgFromStore()
    }, [])
  );
  
  useEffect(() => {
    if (route.params?.exercise) {
      setExercises(prev => [...prev, route.params?.exercise])
    }
  }, [route.params?.exercise]);
  
  const getImg = async () => {
    try {
      const value = await AsyncStorage.getItem('@storingImg');
      if(value !== null) {
        setSelectedWorkoutImage(value);
      }
    } catch(e) {
      console.log(e);
    }
  };
  
  const removeImgFromStore = async () => {
    try {
      await AsyncStorage.removeItem('@storingImg');
    } catch (e) {
      console.log(e);
    }
  };


  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return <ExerciseContainer exerciseTitle={item.title}/>
  }

  return (
    <View style={styles.createWorkoutContainer}>
      <CustomTextInput 
        placeholder="Введите название тренировки" 
        value={workoutTitle}
        setValue={setWorkoutTitle}
      />

      <ImageSelector 
        images={imagesArray}
        selectedImage={selectedWorkoutImage}
      />

      <View style={styles.workoutExercisesContainer}>
        <View style={styles.workoutExercisesHeaderWrapper}>
          <Text style={styles.workoutExercisesHeader}>Упражнения</Text>
          <Button iconName="ios-add" iconColor="#fff" onPress={() => navigation.push("CreateExercise")}/>
        </View>
        
        { exercises.length < 1 ? 
          <Text style={styles.textDescription}>Добавьте упражнения</Text> : 
          null
        }
      </View>

      <FlatList 
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString()
        }}
      />

      <CompleteButton 
        buttonText="Создать тренировку" 
        onPress={() => {
          dispatch(createWorkout(idGenerator(), workoutTitle, selectedWorkoutImage, exercises));
          navigation.goBack();
        } }
        disabled={workoutTitle && selectedWorkoutImage ? false : true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  createWorkoutContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  
  workoutExercisesContainer: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center'
  },
  workoutExercisesHeaderWrapper: {
    // backgroundColor: 'pink',
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workoutExercisesHeader: theme.HEADER_TEXT,

  textDescription: theme.DESCRIPTION_TEXT
})
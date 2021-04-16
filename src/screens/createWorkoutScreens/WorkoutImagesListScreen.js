import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppHeader } from '../../components/AppHeader';

export const WorkoutImagesListScreen = ({ route, navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { images } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions(
      // можно убрать дёргание при выборе картинки -> не обновлять useLayoutEffect, а сделать это через useEffect и попробовать setNavigationOptions for the previousScreen
      AppHeader("Выбор иллюстрации", 'checkmark', () => navigation.goBack()),
    );
  }, [])

  useEffect(() => {
    storeImg(selectedImage)
  }, [selectedImage])

  const storeImg = async (value) => {
    try {
      await AsyncStorage.setItem('@storingImg', value);
    } catch (e) {
      console.log(e)
    }
  };

  const ImageCard = ({ image }) => {
    return (
      <TouchableOpacity 
        style={styles.workoutImgCard} 
        activeOpacity={1}
        onPress={() => setSelectedImage(image)}
      >
        <Image source={{uri: image}} style={styles.workoutImg}/> 
          <View style={styles.workoutImgSelected}>
          {
            selectedImage == image ?
              <Ionicons
                name="checkmark-circle-sharp" 
                size={44} 
                color="#000"
              /> : null
          }
          </View>
      </TouchableOpacity>
    );
  }

  const renderItem = ({ item }) => (
    <ImageCard image={item.image}/>
  );
    
  return (
    <View style={styles.workoutImagesListContainer}>
      <FlatList 
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  workoutImagesListContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20
  },

  workoutImgCard: {
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  workoutImg: {
    flex: 1,
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  workoutImgSelected: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
})
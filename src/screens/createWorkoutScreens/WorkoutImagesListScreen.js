import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MAN_STRONG_ONE, MAN_STRONG_TWO, MAN_STRONG_THREE, IMAGE_BUTT } from '../../../assets/imgs/images';
import { AppHeader } from '../../components/AppHeader';
import theme from '../../theme';

export const WorkoutImagesListScreen = ({ route, navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { images } = route.params;
  const previousScreenName = navigation.dangerouslyGetState().routes[navigation.dangerouslyGetState().routes.length-2].name;

  useLayoutEffect(() => {
    navigation.setOptions(
      AppHeader("Выбор иллюстрации", 'checkmark', () => navigation.navigate(previousScreenName, { img: selectedImage})),
    );
  }, [selectedImage])

  const ImageCard = ({ image }) => {
    return (
      <TouchableOpacity 
        style={styles.workoutImgCard} 
        activeOpacity={1}
        onPress={() => setSelectedImage(image)}
      >
        <Image source={{uri: image}} style={styles.workoutImg}/> 
        {
          selectedImage == image ?
          <View style={styles.workoutImgSelected}>
            <Ionicons
              name="checkmark-circle-sharp" 
              size={44} 
              color="#000"
            />
          </View> :
          null
        }
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
    width: '100%',
    height: '100%',
    // backgroundColor: "rgba(0, 0, 0, .25)",
    position: 'absolute',
    alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  }
})
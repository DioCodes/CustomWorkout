import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

export const ImageSelector = ({ images, selectedImage }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.imgSelectorContainer}>
      <TouchableOpacity 
        style={styles.imgSelectorWrapper} 
        activeOpacity={theme.ACTIVE_OPACITY} 
        onPress={() => navigation.push("WorkoutImagesList", { images })}
      >
        {
          selectedImage ?
          <Image source={{uri: selectedImage}} style={styles.imgSelector} /> :
          <Ionicons name='add-circle-sharp' size={84} color="#000" />
        }
      </TouchableOpacity>

      {
        !selectedImage ?
        <Text style={styles.textDescription}>Выберите изображение карточки</Text> :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  imgSelectorContainer: {
    marginTop: 20,
    width: '100%'
  },
  imgSelectorWrapper: {
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  imgSelector: {
    flex: 1,
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  textDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, .5)"
  }
})
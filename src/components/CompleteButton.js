import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import { useDispatch } from 'react-redux';

export const CompleteButton = ({ buttonText, onPress = () => {}, disabled = false }) => {
  const navigation = useNavigation();

  const onPressButtonHandler = () => {
    onPress();
  }

  return (
    <TouchableOpacity 
      onPress={!disabled ? onPressButtonHandler : null} 
      style={styles.completeButtonContainer} 
      activeOpacity={theme.ACTIVE_OPACITY}
    >
      <View style={{
        width: '100%',
        // backgroundColor: 'red',
        borderTopColor: 'rgba(255, 255, 255, .15)',
        borderTopWidth: 1,
      }}>
        <View style={styles.completeButtonWrapper}>
          <Text style={styles.completeButtonText}>{buttonText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  completeButtonContainer: {
    marginHorizontal: -20,
  },
  completeButtonWrapper: {
    backgroundColor: '#000',
    alignItems: 'center',
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 15
  },
  completeButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold'
  },
})
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import { useDispatch } from 'react-redux';

export const CompleteButton = ({ buttonText, onPress = () => {}, disabled = false, isBorder = true, isWhite = false }) => {
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
        borderTopColor: 'rgba(255, 255, 255, .15)',
        borderTopWidth: isBorder ? 1 : 0,
      }}>
        <View style={{...styles.completeButtonWrapper, backgroundColor: isWhite ? '#fff' : '#000'}}>
          <Text style={[styles.completeButtonText, {color: isWhite ? '#000' : '#fff'}]}>{buttonText}</Text>
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
    alignItems: 'center',
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  completeButtonText: theme.BUTTON_TEXT
})
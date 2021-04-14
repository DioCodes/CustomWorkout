import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const CustomTextInput = ({ value, setValue, placeholder, }) => {
  return (
    <View style={styles.customTextInputContainer}>
      <TextInput
        style={styles.customTextInput}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, .25)"
        value={value}
        onChangeText={(value) => setValue(value)}
        clearButtonMode="while-editing"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  customTextInputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  customTextInput: {
    // fontFamily: "norms-medium",
    color: "#fff",
    fontSize: 20,
  }
})
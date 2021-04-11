import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';

export const Checkbox = ({ color = "white" }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked)

  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} activeOpacity={theme.ACTIVE_OPACITY}>
      <Ionicons name={isChecked ? "md-checkmark-circle-sharp" : "ellipse-outline"} size={30} color={color} />
    </TouchableOpacity>
  )
}
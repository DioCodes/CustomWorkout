import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';

export const Checkbox = ({ color = "white" }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} activeOpacity={theme.ACTIVE_OPACITY}>
      <Ionicons name={isChecked ? "checkmark-circle-sharp" : "ellipse-outline"} size={32} color={color} />
    </TouchableOpacity>
  )
}
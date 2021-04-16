import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';

export const Checkbox = ({ 
  color = "white", 
  isCompleted, 
  isDisabled, 
  iconChecked = "checkmark-circle-sharp",
  iconUnChecked = "ellipse-outline"
}) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  return (
    <TouchableOpacity disabled={isDisabled} onPress={() => setIsChecked(!isChecked)} activeOpacity={theme.ACTIVE_OPACITY}>
      <Ionicons name={isChecked ? iconChecked : iconUnChecked} size={32} color={color} />
    </TouchableOpacity>
  )
}
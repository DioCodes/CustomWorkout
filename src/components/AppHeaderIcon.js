import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

export const AppHeaderIcon = (props) => {
  return (
    <HeaderButton 
      {...props}
      iconSize={28}
      IconComponent={Ionicons}
      color="#fff"
    />
  )
}
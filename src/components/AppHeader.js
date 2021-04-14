import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from './AppHeaderIcon';

const Header = ({ onPress, iconName }) => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item 
      onPress={onPress}
      iconName={iconName}
    />
  </HeaderButtons>
)

export const AppHeader = (header, iconName, onPress, isBorder = true) => (
  {
    headerShown: true,
    headerTitle: header,
    // headerLeft: () => {},
    headerRight: () => <Header onPress={onPress} iconName={iconName}/>,
    headerStyle: {
      backgroundColor: "#000",
      shadowColor: "transparent",
      elevation: 0,
      borderBottomWidth: isBorder ? 1 : 0,
      borderBottomColor: "rgba(255, 255, 255, .15)",
    },
  }
)
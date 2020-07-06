import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ({
  children,
  flex,
  alignItems,
  justifyContent,
  style,
  onPress
}: {
  flex: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch',
  justifyContent:
    | 'center'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-between'
    | 'space-evenly',
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        {
          flexDirection: flex,
          alignItems: alignItems,
          justifyContent: justifyContent,
        },
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
}

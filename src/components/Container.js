import React from 'react';
import {View} from 'react-native';

export default function ({
  children,
  flex,
  alignItems,
  justifyContent,
  style,
  flexWrap
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
  flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'

}) {
  return (
    <View
      style={[{
        flexDirection: flex,
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexWrap: flexWrap
      }, style]}>
      {children}
    </View>
  );
}

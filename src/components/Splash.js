import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LogoSvg} from '../constant/IconList';

export default function () {
  return (
    <View style={style.container}>
      <LogoSvg color="#fff" size={120} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5722',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

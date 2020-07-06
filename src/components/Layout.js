import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from './Header';

export default function ({children, title, disableHeader, backgroundColor}) {
  return (
    <View style={[style.layout, { backgroundColor: backgroundColor || '#f7f7fc'}]}>
      {disableHeader ? null : <Header page={title} /> }
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

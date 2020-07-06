import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Container from './Container';
import { useNavigation } from '@react-navigation/native';
import { PagesRouteName } from '../constant/PagesRouteNames';

export default function ({header, info, disableTumunugor, styles, routeData, route}) {
  const nav = useNavigation();
  return (
    <Container style={[style.header, styles]} alignItems="center" flex="row">
      <View>
        <Text style={style.h3}>{header}</Text>
        {info ? <Text style={style.p}>{info}</Text> : null}
      </View>
      {disableTumunugor ? null : (
        <TouchableOpacity onPress={() => nav.navigate(PagesRouteName.bottom.home.alldata, routeData)} style={style.top}>
          <Text style={style.all}>Tümünü gör</Text>
        </TouchableOpacity>
      )}
    </Container>
  );
}

const style = StyleSheet.create({
  h3: {
    fontWeight: '700',
    fontSize: 16,
  },
  p: {
    fontWeight: '200',
    fontSize: 12,
  },
  all: {
    color: 'blue',
  },
  header: {
    marginBottom: 10,
  },
  top: {
    marginLeft: 'auto',
  }
});

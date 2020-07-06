import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Container from './Container';
import {RightIcon} from '../constant/IconList';
import TouchContainer from './TouchContainer';
import { useNavigation } from '@react-navigation/native';
import { PagesRouteName } from '../constant/PagesRouteNames';

export default function ({img, firma, is, ilan_id}) {
  const nav = useNavigation();
  return (
    <TouchContainer onPress={() => nav.navigate(PagesRouteName.bottom.home.ilan, {ilan_id: ilan_id})} alignItems="center" style={style.card} flex="column">
      <Image
        source={{
          uri: img
        }}
        style={style.founder}
      />
      <Container alignItems="center">
        <Text numberOfLines={1} style={style.h3}>{firma}</Text>
        <Text numberOfLines={2} style={style.p}>{is}</Text>
      </Container>
    </TouchContainer>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 5,
    marginBottom: 10,
    width: 180,
    paddingVertical: 20,
    marginRight: 15
  },
  padd: {
      paddingHorizontal: 10
  },
  founder: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  p: {
    textAlign: 'center'
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  remote: {
    color: '#ce3d38',
    flexBasis: 1,
  },
});

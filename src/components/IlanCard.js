import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Container from './Container';
import {SaveIcon} from '../constant/IconList';
import TouchContainer from './TouchContainer';
import {useNavigation} from '@react-navigation/native';
import {PagesRouteName} from '../constant/PagesRouteNames';
import {AuthContext} from '../context/AuthContext';

export default function ({tanim, location, image, ilan_id, route}) {
  const nav = useNavigation();
  const {saved, setSIlan, delSave} = useContext(AuthContext);
  const saveIlan = () => {
    const saveData = {
      image: image,
      ilan_id: ilan_id,
      location: location,
      tanim: tanim,
    };
    let varMi = saved.findIndex((item) => item.ilan_id === ilan_id);
    if (varMi === -1) {
      setSIlan(saveData);
    } else {
      delSave(varMi);
    }
  };
  return (
    <TouchableOpacity
      onPress={() =>
        nav.navigate(route || PagesRouteName.bottom.home.ilan, {
          ilan_id: ilan_id,
        })
      }
      style={style.card}>
      <Container style={style.imageCard}>
        <Image
          source={{
            uri: image,
          }}
          style={style.founder}
        />
      </Container>
      <Container style={style.pl}>
        <Text style={style.h3}>{tanim}</Text>
        <Text style={style.location}>{location}</Text>
      </Container>
      <TouchableOpacity onPress={() => saveIlan()} activeOpacity={0.6}>
        <SaveIcon
          color={
            saved.findIndex((item) => item.ilan_id === ilan_id) === -1
              ? '#111'
              : 'red'
          }
          size={25}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  founder: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  pl: {
    marginLeft: 20,
    marginRight: 'auto',
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  remote: {
    color: '#ce3d38',
    flexBasis: 1,
  },
  imageCard: {
    borderRadius: 5,
    width: 40,
    height: 40,
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  money: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    marginBottom: 2,
  },
});

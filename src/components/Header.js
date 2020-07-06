import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {BackIcon, LogoSvg} from '../constant/IconList';
import {useNavigation} from '@react-navigation/native';
import Container from './Container';

export default function ({page}) {
  return (
    <View style={style.header}>
      <LogoSvg size={30} color="#FF5722" />
      <Text style={style.title}>{page}</Text>
    </View>
  );
}

export const BackHeader = ({title}) => {
  const nav = useNavigation();
  return (
    <View style={style.header}>
      <TouchableOpacity
        onPress={() => nav.goBack()}
        activeOpacity={0.5}
        style={style.back_btn}>
        <BackIcon color="#111" size={28} />
      </TouchableOpacity>
      <Text style={style.back_title}>{title}</Text>
    </View>
  );
};

export const IlanHeader = ({img, location, firma}) => {
  const nav = useNavigation();
  return (
    <View style={[style.header, {elevation: 1, paddingVertical: 38, backgroundColor: '#fcfcfc'}]}>
      <Container flex="row" style={style.container}>
        <Image
          source={{
            uri:
              img,
          }}
          style={style.imageIcon}
        />
        <Container style={style.is_icerik}>
          <Text style={style.istanim}>{firma}</Text>
          <Text style={style.firma}>{location}</Text>
        </Container>
      </Container>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 1
  },
  is_icerik: {
    flex: .9,
    marginLeft: 15
  },
  istanim: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  firma: {
    fontSize: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#2a3043',
    marginLeft: 10
  },
  back_btn: {
    justifyContent: 'center',
    flex: 0.1,
    alignItems: 'center',
  },
  back_title: {
    flex: 0.8,
    textAlign: 'center',
  },
  imageIcon: {
    width: 35,
    height: 35,
    borderRadius: 5
  },
  container: {
    marginLeft: 10,
    flex: .9,
    alignItems: 'center',
  },
});

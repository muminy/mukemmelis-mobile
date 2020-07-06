import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import TouchContainer from '../../components/TouchContainer';
import { BackHeader } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { PagesRouteName } from '../../constant/PagesRouteNames';
import { AuthContext } from '../../context/AuthContext';
export default function () {
  const { asehir, tip, seviye } = useContext(AuthContext);
  const nav = useNavigation();
  return (
    <Layout disableHeader title="isbul.com">
      <BackHeader title="Arama filtresi" />
      <Container style={style.container}>
        <PageTitle disableTumunugor header="Bölge" info="İle göre arama yapın" />
      </Container>
      <TouchContainer onPress={() => nav.navigate(PagesRouteName.bottom.search.filter.sehirler)} alignItems="center" flex="row" style={style.form}>
        <Text style={style.find}>İl seçin</Text>
        <Text>{asehir === '' ? 'Ayarlanmadı' : asehir}</Text>
      </TouchContainer> 
      <Container style={style.container}>
        <PageTitle disableTumunugor header="Çalışma tipi" info="Çalışma tipine göre arama yapın" />
      </Container>
      <TouchContainer onPress={() => nav.navigate(PagesRouteName.bottom.search.filter.tip)} alignItems="center" flex="row" style={style.form}>
        <Text style={style.find}>İş tipi</Text>
        <Text>{tip === '' ? 'Ayarlanmadı' : tip}</Text>
      </TouchContainer>
      <Container style={style.container}>
        <PageTitle disableTumunugor header="Tecrübe" info="İş tecrübesine göre ara" />
      </Container>
      <TouchContainer onPress={() => nav.navigate(PagesRouteName.bottom.search.filter.seviye)} alignItems="center" flex="row" style={style.form}>
        <Text style={style.find}>Tecrübe</Text>
        <Text>{seviye === '' ? 'Ayarlanmadı' : seviye}</Text>
      </TouchContainer>
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0
  },
  form: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomColor: '#eee'
  },
  find: {
    fontWeight: 'bold',
    marginRight: 'auto',
    fontSize: 15,
  },

});

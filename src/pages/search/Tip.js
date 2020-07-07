import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import TouchContainer from '../../components/TouchContainer';
import { TipJson } from '../../helpers/FormJson';
import { AuthContext } from '../../context/AuthContext';

export default function () {
  const { tip, setCTips } = useContext(AuthContext);
  return (
    <Layout disableHeader title="isbul.com">
      <Container style={style.padd}>
        <PageTitle disableTumunugor header="Çalışma tipi" info={tip === '' ? 'Ayarlanmadı' : tip} />
      </Container>
      <FlatList
        data={TipJson}
        keyExtractor={(_) => _.key.toString()}
        renderItem={({item}) => (
          <TouchContainer onPress={() => setCTips(item.value)} style={style.list} flex="row">
            <Text style={style.sehirler}>{item.value === '' ? 'Ayarlanmadı' : item.value}</Text>
            <Container style={item.value === tip ? style.secili : style.sec}></Container>
          </TouchContainer>
        )}
      />
    </Layout>
  );
}


const style = StyleSheet.create({
  list: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  padd: {
    padding: 10,
    paddingBottom: 0,
  },
  sec: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  sehirler: {
    marginRight: 'auto',
  },
  secili: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#111',
  }
});
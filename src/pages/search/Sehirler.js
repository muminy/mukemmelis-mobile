import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { SehirlerJson } from '../../helpers/FormJson';
import PageTitle from '../../components/PageTitle';
import TouchContainer from '../../components/TouchContainer';
import { AuthContext } from '../../context/AuthContext';

export default function () {
  const { asehir, setASehir } = useContext(AuthContext);
  return (
    <Layout disableHeader title="isbul.com">
      <Container style={style.padd}>
        <PageTitle disableTumunugor header="Şehirler" info={asehir === '' ? 'Ayarlanmadı' : asehir} />
      </Container>
      <FlatList
        data={SehirlerJson}
        keyExtractor={(_) => _.key.toString()}
        renderItem={({item}) => (
          <TouchContainer onPress={() => setASehir(item.value)} style={style.list} flex="row">
            <Text style={style.sehirler}>{item.value === '' ? 'Ayarlanmadı' : item.value}</Text>
            <Container style={item.value === asehir ? style.secili : style.sec}></Container>
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

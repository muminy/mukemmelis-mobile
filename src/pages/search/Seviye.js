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
import { AuthContext } from '../../context/AuthContext';

export default function () {
  const { seviye, setASeviye } = useContext(AuthContext);
  const [seviyeList, setSeviyeList] = useState(["","Junior","Senior"])
  return (
    <Layout disableHeader title="isbul.com">
      <Container style={style.padd}>
        <PageTitle disableTumunugor header="Arana iş tecrübesi" info={seviye === '' ? 'Farketmez' : seviye} />
      </Container>
      <FlatList
        data={seviyeList}
        keyExtractor={(_) => _}
        renderItem={({item, index}) => (
          <TouchContainer onPress={() => setASeviye(item)} style={style.list} flex="row">
            <Text style={style.sehirler}>{item === '' ? 'Hiçbiri' : item}</Text>
            <Container style={item === seviye ? style.secili : style.sec}></Container>
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
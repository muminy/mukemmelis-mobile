import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import {SettingIcon} from '../../constant/IconList';
import {useNavigation} from '@react-navigation/native';
import {PagesRouteName} from '../../constant/PagesRouteNames';
import {AuthContext} from '../../context/AuthContext';
import {Api} from '../../constant/Api';
import IlanCard from '../../components/IlanCard';
import {DefaultSkeleton} from '../../components/Skeleton';

export default function () {
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const {tip, seviye, asehir} = useContext(AuthContext);
  const [srcData, setSrcData] = useState([]);
  const [noData, setNoData] = useState(false);

  const searchBtn = () => {
    setLoading(true);
    fetch(`${Api}/ilan/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        is_tip: tip,
        is_baslik: value,
        is_deneyim: seviye,
        is_sehir: asehir,
      }),
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => setSrcData(responseJson))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    setNoData(srcData.length === 0 && loading ? true : false);
  }, [srcData]);
  return (
    <Layout disableHeader>
      <Container justifyContent="center" flex="row" style={style.search}>
        <TextInput
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder="Pozisyon ara"
          style={style.textinput}
        />
        <TouchableOpacity onPress={searchBtn} style={style.arabtn}>
          <Text style={style.ara}>Ara</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate(PagesRouteName.bottom.search.filter.main)}
          style={style.settingIcon}>
          <SettingIcon color="#111" size={20} />
        </TouchableOpacity>
      </Container>
      <Container style={{padding: 10}}>
        {loading ? (
          <DefaultSkeleton />
        ) : (
          <FlatList
            data={srcData}
            keyExtractor={(_) => _.ilan_id.toString()}
            renderItem={({item, index}) => (
              <IlanCard
                key={index}
                route={PagesRouteName.bottom.search.ilan}
                image={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
                tanim={item.is_baslik}
                location={item.sehir}
                ilan_id={item.ilan_id}
              />
            )}
          />
        )}
      </Container>
      {noData ? (
        <View style={style.not_found}>
          <Text style={style.h4}>Üzgünüm :(</Text>
          <Text style={style.p}>
            İstediğin kriterlere göre sana iş bulamadık, lütfen kriterlerinizi
            doğru belirleyerek tekrar arama yapınız
          </Text>
        </View>
      ) : null}
    </Layout>
  );
}

const style = StyleSheet.create({
  textinput: {
    marginRight: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
  search: {
    padding: 0,
    backgroundColor: '#fff',
    elevation: 1,
  },
  arabtn: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignSelf: 'center',
  },
  settingIcon: {
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  ara: {
    fontSize: 16,
  },
  searchmain: {
    padding: 10,
  },
  kategori: {
    paddingHorizontal: 23,
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderRadius: 3,
    elevation: 1,
    marginRight: 15,
    marginBottom: 10,
  },
  kategoritext: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  not_found: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padd: {
    padding: 10,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  p: {
    width: '50%',
    textAlign: 'center',
  },
});

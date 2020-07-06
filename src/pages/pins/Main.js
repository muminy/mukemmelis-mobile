import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import Layout from '../../components/Layout';
import IlanCard from '../../components/IlanCard';
import PageTitle from '../../components/PageTitle';
import {AuthContext} from '../../context/AuthContext';
import {PagesRouteName} from '../../constant/PagesRouteNames';
import { SiteConfig } from '../../constant/config';

export default function () {
  const {saved} = useContext(AuthContext);
  return (
    <Layout title="Takipler">
      {saved.length ? (
        <View style={style.padd}>
          <PageTitle
            disableTumunugor
            info={`Toplam ${saved.length} kayıtlı ilan`}
            header="Kayıtlı ilanlar"
          />
          <FlatList
            data={saved}
            keyExtractor={(_) => _.ilan_id.toString()}
            renderItem={({item, index}) => (
              <IlanCard
                key={index}
                route={PagesRouteName.bottom.pinned.ilan}
                image={item.image}
                tanim={item.tanim}
                location={item.location}
                ilan_id={item.ilan_id}
              />
            )}
          />
        </View>
      ) : (
        <View style={style.not_found}>
          <Text style={style.h4}>Buralar boş!</Text>
          <Text style={style.p}>Lütfen, takip etmek istediğin ilanları kayıt ederek hızlıca ulaşabilirsiniz.</Text>
        </View>
      )}
    </Layout>
  );
}

const style = StyleSheet.create({
  not_found: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padd: {
    padding: 10
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5
  },
  p: {
    width: '50%',
    textAlign: 'center'
  }
});

import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import Layout from '../../components/Layout';
import IlanCard from '../../components/IlanCard';
import PageTitle from '../../components/PageTitle';
import ScrollIlan from '../../components/ScrollIlan';
import {getIlan, getTipIlan} from '../../request/getAllIlan';
import {DefaultSkeleton} from '../../components/Skeleton';
import { PagesRouteName } from '../../constant/PagesRouteNames';
export default function () {
  const [ilans, setIlans] = useState([]);
  const [remote, setRemote] = useState([]);
  const [stajyer, setStajyer] = useState([]);
  const [ft, setFT] = useState([]);
  useEffect(() => {
    getIlan().then((responseJson) => setIlans(responseJson));
  }, []);

  useEffect(() => {
    if(ilans.length > 0){
      setStajyer(ilans.filter(item => item.tip === 'Stajyer'))
      setFT(ilans.filter(item => item.tip === 'Tam zamanlı'))
      setRemote(ilans.filter(item => item.tip === 'Uzaktan'))
    }
  }, [ilans])
  return (
    <Layout title="Home">
      <ScrollView contentContainerStyle={style.container}>
        {ilans.length ? (
          <>
            <PageTitle
              info={`Toplam ${ilans.length} ilan`}
              header="Son eklenen ilanlar"
              routeData={{type: '', title: 'Tüm iş ilanları'}}
            />
            {ilans.map((item, index) => (
              <IlanCard
                key={index}
                image={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
                tanim={item.is_baslik}
                location={item.sehir}
                ilan_id={item.ilan_id}
              />
            ))}
          </>
        ) : (
          <DefaultSkeleton />
        )}
        {ilans.length ? (
          <>
            <PageTitle
              info={`Toplam ${remote.length} ilan`}
              header="Remote ilanlar"
              routeData={{type: 'Uzaktan', title: 'Uzaktan iş ilanları'}}
            />
            <FlatList
              horizontal
              data={remote}
              keyExtractor={(_) => _.ilan_id.toString()}
              renderItem={({item, index}) => (
                <ScrollIlan
                  firma={item.firma_ad}
                  is={item.is_baslik}
                  ilan_id={item.ilan_id}
                  img={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
                  key={index}
                />
              )}
            />
          </>
        ) : null}
        {ilans.length ? (
          <>
            <PageTitle
              info={`Toplam ${stajyer.length} ilan`}
              header="Stajyer ilanları"
              routeData={{type: 'Stajyer', title: 'Stajyer iş ilanları'}}
            />
            {stajyer.map((item, index) => (
              <IlanCard
                key={index}
                image={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
                tanim={item.is_baslik}
                location={item.sehir}
                ilan_id={item.ilan_id}
              />
            ))}
          </>
        ) : null}
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});

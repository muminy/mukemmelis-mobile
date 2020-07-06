import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import Layout from '../../components/Layout';
import IlanCard from '../../components/IlanCard';
import {Api} from '../../constant/Api';
import {DefaultSkeleton} from '../../components/Skeleton';
export default function ({route}) {
  const [ilans, setIlans] = useState([]);
  const { type, title } = route.params;
  useEffect(() => {
    fetch(`${Api}/ilan/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        is_tip: type,
        is_baslik: '',
        is_deneyim: '',
        is_sehir: '',
      }),
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => setIlans(responseJson))
  }, []);
  return (
    <Layout title={title}>
      <ScrollView contentContainerStyle={style.container}>
        {ilans.length ? (
          ilans.map((item, index) => (
            <IlanCard
              key={index}
              image={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
              tanim={item.is_baslik}
              location={item.sehir}
              ilan_id={item.ilan_id}
            />
          ))
        ) : (
          <DefaultSkeleton />
        )}
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});

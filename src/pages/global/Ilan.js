import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import {IlanHeader} from '../../components/Header';
import {TimeIcon, BackIcon, SaveIcon} from '../../constant/IconList';
import PageTitle from '../../components/PageTitle';
import YetenekList from '../../components/YetenekList';
import {Api} from '../../constant/Api';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useNavigation} from '@react-navigation/native';
import {IlanSkeleton, Loader} from '../../components/Skeleton';
import {getDetail} from '../../request/getAllIlan';
import {AuthContext} from '../../context/AuthContext';
export default function ({route}) {
  const nav = useNavigation();
  const [ilan_id, setIlanId] = useState(route.params.ilan_id);
  const [ilanData, setIlanData] = useState(null);
  const {saved, setSIlan, delSave} = useContext(AuthContext);
  const saveIlan = () => {
    const saveData = {
      image: `https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${ilanData.slug_image}?alt=media`,
      ilan_id: ilan_id,
      location: ilanData.sehir,
      tanim: ilanData.is_baslik,
    };
    let varMi = saved.findIndex((item) => item.ilan_id === ilan_id);
    if (varMi === -1) {
      setSIlan(saveData);
    } else {
      delSave(varMi);
    }
  };
  useEffect(() => {
    getDetail(ilan_id).then((responseJson) => setIlanData(responseJson));
  }, []);
  return (
    <Layout backgroundColor="#fff" disableHeader>
      {ilanData ? (
        <>
          <ScrollView>
            <IlanHeader
              firma={ilanData.is_baslik}
              img={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${ilanData.slug_image}?alt=media`}
              location={ilanData.firma_ad}
            />
            <Container style={style.paddingContainer}>
              {ilanData.is_aciklama.map((item, index) =>
                item === '' ? null : (
                  <Text style={style.is_aciklama} key={index}>
                    {item}
                  </Text>
                ),
              )}
            </Container>
            <Container
              style={[style.paddingContainer, style.detay, {marginBottom: 0}]}>
              <PageTitle disableTumunugor header="İstenen yetenekler" />
              {ilanData.is_nitelik.map((item, index) => (
                <YetenekList key={index} yetenek={item} />
              ))}
            </Container>
            <Container
              style={[style.paddingContainer, style.detay, {marginBottom: 0}]}>
              <PageTitle disableTumunugor header="İş şartları" />
              {ilanData.is_sart.map((item, index) => (
                <YetenekList key={index} yetenek={item} />
              ))}
            </Container>
            <Container style={[style.paddingContainer, style.detay]}>
              <PageTitle disableTumunugor header="İş Detayı" />
              <Container flex="row">
                <Text>Şehir/Bölge</Text>
                <Text style={style.is_d}>{ilanData.sehir}</Text>
              </Container>
              <Container flex="row">
                <Text>Deneyim/Tecrübe</Text>
                <Text style={style.is_d}>{ilanData.deneyim}</Text>
              </Container>
              <Container flex="row">
                <Text>İş/Çalışma tipi</Text>
                <Text style={style.is_d}>{ilanData.tip}</Text>
              </Container>
            </Container>
          </ScrollView>
          <Container style={style.basvur_container}>
            <TouchableOpacity activeOpacity={0.9} style={style.basvur_btn}>
              <Text style={style.basvur}>Başvur</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveIlan()}
              activeOpacity={0.7}
              style={[
                style.savebtn,
                {
                  backgroundColor:
                    saved.findIndex((item) => item.ilan_id === ilan_id) === -1
                      ? '#f5f5f5'
                      : '#eeeeee',
                },
              ]}>
              <SaveIcon
                size={30}
                color={
                  saved.findIndex((item) => item.ilan_id === ilan_id) === -1
                    ? 'black'
                    : 'red'
                }
              />
            </TouchableOpacity>
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

const style = StyleSheet.create({
  h3: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0f0620',
    marginBottom: 16,
  },
  paddingContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  ilan_time: {
    fontSize: 10,
    marginLeft: 5,
    marginRight: 15,
  },
  yetenek_card: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eef5ff',
    marginRight: 5,
    marginBottom: 5,
  },
  marginBottom: {
    marginBottom: 10,
  },
  yetenek_text: {
    color: '#4889f4',
    fontWeight: 'bold',
  },
  basvur_btn: {
    marginHorizontal: 15,
    backgroundColor: '#da4646',
    marginTop: 'auto',
    borderWidth: 0,
    paddingVertical: 10,
    paddingBottom: 12,
    borderRadius: 4,
    flex: 0.8,
  },
  basvur: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  basvur_container: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  is_aciklama: {
    marginBottom: 10,
  },
  savebtn: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 4,
    elevation: 1,
  },
  detay: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginBottom: 18,
  },
  is_d: {
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginBottom: 5,
  },
});

import React, {useContext, useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthProvider} from '../context/AuthContext';
import Login from '../pages/Login';
import {PagesRouteName} from '../constant/PagesRouteNames';
import {HomeIcon, SearchIcon, PinIcon, ProfileIcon} from '../constant/IconList';
import {StatusBar} from 'react-native';
import SearchStack from './SearchStack';
import PinsMain from '../pages/pins/Main';
import HomeStack from './HomeStack';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'
import PinStack from './PinStack';
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const AppRoute = () => {
  const [sehir, setSehir] = useState('');
  const [tips, setTips] = useState('');
  const [seviye, setSeviye] = useState('');
  const [saveIlan, setSaveIlan] = useState([]);
  useEffect(() => {
    try {
      AsyncStorage.getItem('asehir').then((value) =>
        value ? setSehir(value) : AsyncStorage.setItem('asehir', ''),
      );
      AsyncStorage.getItem('atip').then((value) =>
        value ? setTips(value) : AsyncStorage.setItem('atip', ''),
      );
      AsyncStorage.getItem('aseviye').then((value) =>
        value ? setSeviye(value) : AsyncStorage.setItem('aseviye', ''),
      );
      AsyncStorage.getItem('saves').then((value) =>
        JSON.parse(value).length
          ? setSaveIlan(JSON.parse(value))
          : AsyncStorage.setItem('saves', JSON.stringify([])),
      );
    } catch (e) {
      console.error('hiiiiiii');
    }
    SplashScreen.hide()
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('asehir', sehir);
  }, [sehir]);

  useEffect(() => {
    AsyncStorage.setItem('atip', tips);
  }, [tips]);

  useEffect(() => {
    AsyncStorage.setItem('aseviye', seviye);
  }, [seviye]);

  useEffect(() => {
    AsyncStorage.setItem('saves', JSON.stringify(saveIlan));
  }, [saveIlan]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AuthProvider
        value={{
          setTabBarVisible: (_) => setTabBarVisible(_),
          asehir: sehir,
          setASehir: (_) => setSehir(_),
          tip: tips,
          setCTips: (_) => setTips(_),
          seviye: seviye,
          setASeviye: (_) => setSeviye(_),
          saved: saveIlan,
          setSIlan: (_) =>
            setSaveIlan((prevState) => {
              prevState.push(_);
              return [...prevState];
            }),
          delSave: (index) =>
            setSaveIlan((prevState) => {
              prevState.splice(index, 1);
              return [...prevState];
            }),
        }}>
        <BottomRoute />
      </AuthProvider>
    </NavigationContainer>
  );
};
const BottomRoute = () => (
  <Bottom.Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        height: 55,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderBottomWidth: 0,
      },
      labelStyle: {
        marginBottom: 5,
      },
    }}>
    <Bottom.Screen
      name={PagesRouteName.bottom.home.main}
      options={{
        tabBarIcon: ({color, size}) => <HomeIcon size={size} color={color} />,
        title: 'Anasayfa',
      }}
      component={HomeStack}
    />
    <Bottom.Screen
      name={PagesRouteName.bottom.search.main}
      options={{
        tabBarIcon: ({color, size}) => <SearchIcon size={size} color={color} />,
        title: 'İş bul',
      }}
      component={SearchStack}
    />
    <Bottom.Screen
      name={PagesRouteName.bottom.pinned.main}
      options={{
        tabBarIcon: ({color, size}) => <PinIcon size={size} color={color} />,
        title: 'Kayıtlı işler',
      }}
      component={PinStack}
    />
  </Bottom.Navigator>
);

export default AppRoute;

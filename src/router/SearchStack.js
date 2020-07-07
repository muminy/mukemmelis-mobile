import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PagesRouteName} from '../constant/PagesRouteNames';
import Main from '../pages/search/Main';
import Filter from '../pages/search/Filter';
import Sehirler from '../pages/search/Sehirler';
import Tip from '../pages/search/Tip';
import Seviye from '../pages/search/Seviye';
import Ilan from '../pages/global/Ilan';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
export default function ({route}) {
  if (route && route.state && route.state?.routes.length === 2) {
    useNavigation().setOptions({
      tabBarVisible: false,
    });
  } else {
    useNavigation().setOptions({
      tabBarVisible: true,
    });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={PagesRouteName.bottom.search.main}
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'Arama Filtresi',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.search.filter.main}
        component={Filter}
      />
      <Stack.Screen
        options={{
          title: 'Şehir',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.search.filter.main}
        name={PagesRouteName.bottom.search.filter.sehirler}
        component={Sehirler}
      />
      <Stack.Screen
        options={{
          title: 'Tip',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.search.filter.main}
        name={PagesRouteName.bottom.search.filter.tip}
        component={Tip}
      />
      <Stack.Screen
        options={{
          title: 'İş seviyesi',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.search.filter.main}
        name={PagesRouteName.bottom.search.filter.seviye}
        component={Seviye}
      />
      <Stack.Screen
        options={{
          title: 'İş detayı',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.search.ilan}
        component={Ilan}
      />
    </Stack.Navigator>
  );
}

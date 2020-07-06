import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PagesRouteName} from '../constant/PagesRouteNames';
import Main from '../pages/home/Main';
import Ilan from '../pages/global/Ilan';
import {useNavigation} from '@react-navigation/native';
import AllData from '../pages/home/AllData';

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
        name={PagesRouteName.bottom.home.main}
        component={Main}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PagesRouteName.bottom.home.alldata}
        component={AllData}
      />
      <Stack.Screen
        options={{
          title: 'İş detayı',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.home.ilan}
        component={Ilan}
      />
    </Stack.Navigator>
  );
}

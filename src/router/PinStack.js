import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PagesRouteName} from '../constant/PagesRouteNames';
import Main from '../pages/pins/Main';
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
        name={PagesRouteName.bottom.pinned.main}
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'İş detayı',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 1},
        }}
        name={PagesRouteName.bottom.pinned.ilan}
        component={Ilan}
      />
    </Stack.Navigator>
  );
}

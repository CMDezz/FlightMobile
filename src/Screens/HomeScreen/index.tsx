import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeLayout from '@Components/HomeLayout';
import SearchLayout from '@Components/SearchLayout';
import {PALLATE} from '@Common/const';

export type HomeScreenProps = {
  HomeLayout: {};
  SearchLayout: {};
};

const Stack = createStackNavigator<HomeScreenProps>();

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        // headerTintColor: 'white',
        headerStyle: {backgroundColor: '#F6F6F6', borderBottomWidth: 0},
        headerTitleStyle: {fontSize: 22, fontWeight: '400'},
        cardStyle: {backgroundColor: '#F6F6F6'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HomeLayout"
        component={HomeLayout}
        options={{
          headerTitle: 'Đặt chuyến bay',
        }}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Kết quả tìm kiếm',
        }}
        name="SearchLayout"
        component={SearchLayout}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

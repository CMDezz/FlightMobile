import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeLayout from '@Components/HomeLayout';
import SearchResultLayout from '@Components/SearchResultLayout';
import {PALLATE} from '@Common/const';

export type HomeScreenProps = {
  HomeLayout: {};
  SearchResultLayout: {};
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
        name="SearchResultLayout"
        component={SearchResultLayout}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator,BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeScreen from '@Screens/HomeScreen';
import BookingScreen from '@Screens/BookingScreen';
import OfferScreen from '@Screens/OfferScreen';
import InboxScreen from '@Screens/InboxScreen';
import ProfileScreen from '@Screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PALLATE } from '@Common/const';

export type BottomTabParams = {
    HomeStack:'HomeStack',
    BookingStack:'BookingStack',
    OfferStack:'OfferStack',
    InboxStack:'InboxStack',
    ProfileStack:'ProfileStack'
}

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabNavigationOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 12,
              }}>
              Trang chủ
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Ionicons name="home" size={size} color='#fff'/>
            ) : (
              <Ionicons name="home-outline" size={size}  color={PALLATE.inActiveColor} />
            );
          },
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="BookingStack"
        component={BookingScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 12,
              }}>
              Đặt vé
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Ionicons name="calendar" size={size} color='#fff' />
            ) : (
              <Ionicons name="calendar-outline" size={size} color={PALLATE.inActiveColor}  />
            );
          },
        headerShown:false,
        }}
      />
      <Tab.Screen
        name="OfferStack"
        component={OfferScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 12,
              }}>
              Ưu đãi
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Ionicons name="wallet" size={size} color='#fff' />
            ) : (
              <Ionicons name="wallet-outline" size={size} color={PALLATE.inActiveColor}  />
            );
          },
        headerShown:false,
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={InboxScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 12,
              }}>
              Tin nhắn
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Ionicons name="mail" size={size} color='#fff' />
            ) : (
              <Ionicons name="mail-unread-outline" size={size} color={PALLATE.inActiveColor}  />
            );
          },
        headerShown:false,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 12,
              }}>
              Cá nhân
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Ionicons name="person" size={size} color='#fff' />
            ) : (
              <Ionicons name="person-outline" size={size} color={PALLATE.inActiveColor} />
            );
          },
        headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
const bottomTabNavigationOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
    //   paddingVertical: 4,
      backgroundColor:PALLATE.primaryColor,
      margin:0,
      height:68
    },
    tabBarShowLabel: false,
  };
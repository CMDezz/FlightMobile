import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

interface Props {}

const BookingScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text> This is BookingScreen </Text>
    </View>
  );
};

export default BookingScreen;

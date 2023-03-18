import React from 'react';
import {View,Text,Keyboard,StyleSheet,KeyboardAvoidingView, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import {StackNavigationProp } from '@react-navigation/stack'
import { HomeScreenProps } from '@Screens/HomeScreen';
import BookingFlight from '@Components/BookingFlight';

interface Props{
}

const HomeLayout:React.FC<Props> = () => {
    const navigation = useNavigation<StackNavigationProp<HomeScreenProps>>()
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView>
                <BookingFlight></BookingFlight>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default HomeLayout;

const styles=StyleSheet.create({
    link:{
        color:'#5db4e8'
    }
})
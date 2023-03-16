import React from 'react';
import {View,Text,Image,SafeAreaView} from 'react-native';
import SplashScreen from '@Screens/SplashScreen';
import {useSelector} from 'react-redux';
import { RootState } from '@Redux/Stores';
import Navigator from '@Screens/index';
import LoginScreen from '@Screens/LoginScreen/index';
const AppNavigator:React.FC = () => {
    const IsLogin = useSelector((state:RootState)=>state.AuthReducer.LogIn)
    return (
        <SafeAreaView style={{flex:1}}>
            {
                !IsLogin ?
                <LoginScreen/>
                :
                <Navigator/>
            }
        </SafeAreaView>
    );
};

export default AppNavigator;
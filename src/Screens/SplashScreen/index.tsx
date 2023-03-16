import React from 'react';
import {Image,View} from 'react-native'

const SplashScreen:React.FC = () => {
    return (
        <View style={{flex:1}}> 
            <Image style={{width:'100%',height:'100%'}} source={require('./../../../assets/image/main-background.png')}/>
        </View>
    );
};

export default SplashScreen;
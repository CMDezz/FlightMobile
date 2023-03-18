import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import { HomeScreenProps } from '@Screens/HomeScreen';
interface Props{

}

const SearchLayout:React.FC<Props> = () => {
    const navigation = useNavigation<StackNavigationProp<HomeScreenProps>>()
    return (
        <View>
                        <View>
            <Text>Đây là search layout</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeLayout',{})}>
            <Text style={styles.link}>Đây là text đến home layout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchLayout;

const styles=StyleSheet.create({
    link:{
        color:'#5db4e8'
    }
})
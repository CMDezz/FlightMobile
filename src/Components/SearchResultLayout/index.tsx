import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenProps} from '@Screens/HomeScreen';
import {RouteProp} from '@react-navigation/native';
import useHook from './Hooks/useHook';
import SearchResultList from './Components/SearchResultList';
import {dataSearchProps} from './utils/data';
import { Skeleton} from '@rneui/themed';
type SearchScreenRouteProp = RouteProp<
  {dataSearch: dataSearchProps[]},
  'dataSearch'
>;

interface Props {
  route?: SearchScreenRouteProp;
}

const SearchResultLayout: React.FC<Props> = ({route}) => {
  const dataSearch = route?.params;
  const {result, isLoading} = useHook(dataSearch);
  console.log('resultltt ', result);
  console.log('isLoading ', isLoading);
  return (
    <View>
      {isLoading ? (
        <View>
          <Skeleton animation="wave" width={80} height={40} />
          <Skeleton
            // LinearGradientComponent={LinearGradient}
            animation="wave"
            width={80}
            height={40}
          />
          <Skeleton animation="wave" width={80} height={40} />
        </View>
      ) : (
        <SearchResultList listSearch={result} />
      )}
      {/* <TouchableOpacity onPress={() => navigation.navigate('HomeLayout', {})}>
        <Text style={styles.link}>Đây là text đến home layout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchResultLayout;

const styles = StyleSheet.create({
  link: {
    color: '#5db4e8',
  },
});

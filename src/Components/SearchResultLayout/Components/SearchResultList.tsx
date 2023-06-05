import { View, Text } from 'react-native'
import React from 'react'
import { dataSearchProps } from '../utils/data'

interface Props {
    listSearch?:dataSearchProps[],
}

const SearchResultList:React.FC<Props> = ({
    listSearch=[],
}) => {

    console.log ('list search ne m ',listSearch)
  return (
    <View>
      <Text>SearchResultList</Text>
    </View>
  )
}

export default SearchResultList
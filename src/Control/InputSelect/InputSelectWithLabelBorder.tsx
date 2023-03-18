import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { AnimatedKeyboardOptions } from 'react-native-reanimated';
import { PALLATE, PALLETE_SPACE, PALLET_FONT } from '@Common/const';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
interface InputSelectWithLabelBorderProps {
    inputLabelPropStyle?:{},
    boxContainerPropStyle?:{},
    rowTextPropStyle?:{},
    rowPropStyle?:{},
    buttonPropStyle?:{},
    buttonTextPropStyle?:{},
    labelText:string,
    inputPlaceHolder?:string,
    selectData:Record<string, any>[],
    onSelect:(selectedItem: {}, index: number)=>void,
    keywordLabel:string,
    keywordValue:string | number,
    renderDropdownIcon?:()=>React.ReactNode |undefined,
    dropdownIconPosition?:'left'|'right',
    isSearch?:boolean,
    searchPlaceHolder?:string,
}

export default function InputSelectWithLabelBorder({
    inputLabelPropStyle={},
    boxContainerPropStyle={},
    buttonPropStyle={},
    buttonTextPropStyle={},
    rowTextPropStyle={},
    rowPropStyle={},
    labelText,
    inputPlaceHolder,
    keywordLabel,
    keywordValue,
    selectData,
    onSelect,
    renderDropdownIcon,
    dropdownIconPosition='right',
    isSearch=false,
    searchPlaceHolder='Tìm kiếm'
}:InputSelectWithLabelBorderProps) {
  return (
    <View style={{...styles.boxContainer, ...boxContainerPropStyle}}>
    <Text style={{...styles.inputLabel, ...inputLabelPropStyle}}>{labelText}</Text>
    <SelectDropdown
        data={selectData}
        defaultButtonText={inputPlaceHolder}
        onSelect={onSelect}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem[keywordLabel];
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item[keywordLabel];
        }}
        buttonStyle={{...styles.buttonStyle,...buttonPropStyle}}
        buttonTextStyle={{...styles.buttonTextStyle,...buttonTextPropStyle}}
        rowStyle={{...styles.rowStyle,...rowPropStyle}}
        rowTextStyle={{...styles.rowTextStyle,...rowTextPropStyle}}
        renderDropdownIcon={renderDropdownIcon}
        dropdownIconPosition={dropdownIconPosition}
        search={isSearch}
        searchPlaceHolder={searchPlaceHolder}
      />
  </View>
  );
}

const styles = StyleSheet.create({
    boxContainer: {

        position: 'relative',
        zIndex:10000,
      },
      inputLabel: {
        zIndex: 2,
        // height:30,
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 12,
        position: 'absolute',
        top: -15,
        left: 12,
      },
      buttonStyle:{
        height:50,
        backgroundColor:'#fff',
        width:'100%',
        // marginHorizontal: 12,
        borderWidth: 1,
        borderColor: PALLATE.borderColor,
        borderRadius: 15,
        paddingHorizontal: 10+12,
      },
      buttonTextStyle:{
        fontSize:PALLET_FONT.size15,
        textAlign:'left',
        marginHorizontal:0,
        paddingLeft:4
      },
      dropdownStyle:{

      },
      rowStyle:{

      },
      rowTextStyle:{
        textAlign:'left',
        paddingHorizontal:PALLETE_SPACE.paddingElements,
        fontSize:PALLET_FONT.size15,
      }
      
});

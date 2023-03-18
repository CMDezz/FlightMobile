import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Button, Tab, IconProps} from '@rneui/themed';
import {PALLATE, PALLET_FONT} from '@Common/const';

interface InputWithLabelBorderProps {
  containerPropStyle?: {};
  inputLabelPropStyle?: {};
  inputContainerPropStyle?: {};
  inputPropStyle?: {};
  errorPropStyle?: {};
  errorMessage?: string | undefined;
  boxContainerPropStyle?: {};
  labelText: string;
  inputPlaceHolder?: string;
  leftIcon?: IconProps | undefined;
  rightIcon?: IconProps | undefined;
}

export default function InputWithLabelBorder({
  containerPropStyle = {},
  inputLabelPropStyle = {},
  inputContainerPropStyle = {},
  inputPropStyle = {},
  labelText,
  inputPlaceHolder,
  errorPropStyle = {},
  boxContainerPropStyle = {},
  errorMessage,
  leftIcon,
  rightIcon,
}: InputWithLabelBorderProps) {
  return (
    <View style={{...styles.boxContainer, ...boxContainerPropStyle}}>
      <Text style={{...styles.inputLabel, ...inputLabelPropStyle}}>
        {labelText}
      </Text>
      <Input
        leftIcon={leftIcon && leftIcon}
        rightIcon={rightIcon && rightIcon}
        placeholder={inputPlaceHolder}
        containerStyle={{...styles.containerStyle, ...containerPropStyle}}
        inputContainerStyle={{
          ...styles.inputContainerStyle,
          ...inputContainerPropStyle,
        }}
        inputStyle={{...styles.inputStyle, ...inputPropStyle}}
        errorStyle={{...styles.errorStyle, ...errorPropStyle}}
        errorMessage={errorMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderColor: PALLATE.borderColor,
    borderRadius: 15,
    position: 'relative',
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
  containerStyle: {
    position: 'relative',
    height: 50,
    zIndex: 1,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    paddingHorizontal: 12,
    // paddingTop:5,
  },
  inputStyle: {
    fontSize: PALLET_FONT.size15,
  },
  errorStyle: {},
});

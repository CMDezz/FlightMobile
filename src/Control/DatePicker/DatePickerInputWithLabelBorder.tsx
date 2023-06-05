import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Button, Input} from '@rneui/themed';
import {PALLATE, PALLET_FONT} from '@Common/const';
import { TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';


interface DatePickerInputWithLabelBorderProps {
  labelText:string,
  placeholder?:string,
  defaultValue?: Date | undefined,
  onChange?:(selectedDate:Date|undefined)=>void,
  inputContainerPropStyle?:{},
  labelPropStyle?:{},
  inputContentPropStyle?:{},
  inputTextPropStyle?:{},
  minDate?:Date,
  maxDate?:Date,
}

export default function DatePickerInputWithLabelBorder({
  labelText,
  defaultValue,
  placeholder='Chọn ngày',
  onChange,
  inputContainerPropStyle,
  labelPropStyle,
  inputContentPropStyle,
  inputTextPropStyle,
  minDate,
  maxDate,
}:DatePickerInputWithLabelBorderProps) {
  const [date, setDate] = useState<Date | undefined>(defaultValue);

  const onChangeDatePicker = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    if (onChange) {
      onChange(currentDate)
    }
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: date ? date : new Date(),
      onChange:onChangeDatePicker,
      mode: 'date',
      is24Hour: true,
      display:'default',
      minimumDate:minDate,
      maximumDate:maxDate
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={{...styles.inputContainer,...inputContainerPropStyle}}>
      <Text style={{...styles.label,...labelPropStyle}}>{labelText}</Text>
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <View style={{...styles.inputContent,...inputContentPropStyle}}>
        <Text style={{...styles.inputText,...inputTextPropStyle}}>{date? moment(date).format('DD/MM/YYYY'):placeholder}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 12,
    position: 'absolute',
    top: -15,
    left: 12,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: PALLATE.borderColor,
    borderRadius: 15,
    position: 'relative',
  },
  inputContent: {
    height:50,
    paddingHorizontal: 22,
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  inputText: {
    fontSize: PALLET_FONT.size15,
    textAlign:'left',
    width:'100%',
  },
});

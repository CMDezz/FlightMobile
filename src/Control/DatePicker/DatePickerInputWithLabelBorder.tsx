import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Button, Input} from '@rneui/themed';
import {PALLATE, PALLET_FONT} from '@Common/const';
import { TouchableWithoutFeedback } from 'react-native';
export default function DatePickerInputWithLabelBorder() {
  const [date, setDate] = useState<Date | undefined>();

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: date ? date : new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Chọn ngày</Text>
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <View style={styles.inputContent}>
        <Text style={styles.inputText}>{date? date?.toLocaleString():'Ngày khởi hành'}</Text>
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

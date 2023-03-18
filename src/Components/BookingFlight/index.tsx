import React, {useState} from 'react';
import {View, TextInput, Keyboard, StyleSheet, Text} from 'react-native';

import {Input, Button, Tab, Icon} from '@rneui/themed';
import {enumTabBookingFlight, enumTabBookingFlightProp} from './utils/enum';
import {PALLATE, PALLETE_SPACE} from '@Common/const';

import InputWithLabelBorder from '@Control/Input/InputWithLabelBorder';
import InputSelectWithLabelBorder from '@Control/InputSelect/InputSelectWithLabelBorder';
import { dataLocation } from './utils/data';
import { KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePickerInputWithLabelBorder from '@Control/DatePicker/DatePickerInputWithLabelBorder';

const BookingFlight = () => {
  const [BookingFlightType, setBookingFlightType] = useState<number>(
    enumTabBookingFlight.OneWay,
  );

  const handleSetBookingType = (value: number) => {
    if (BookingFlightType == value) return;
    Keyboard.dismiss();
    setBookingFlightType(value);
  };

  const handleSelectLocation = (selectedItem:{},index:number) =>{

  }

  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: 'transparent'}}>
      <View style={styles.tabHeader}>
        <View style={styles.tabHeaderContent}>
          <Button
            title={
              <CustomTitle
                title="Một chiều"
                style={
                  BookingFlightType == enumTabBookingFlight.OneWay
                    ? styles.buttonTabHeaderTitleActive
                    : styles.buttonTabHeaderTitle
                }
              />
            }
            containerStyle={styles.buttonHeaderContainer}
            buttonStyle={
              BookingFlightType == enumTabBookingFlight.OneWay
                ? styles.buttonTabHeaderActive
                : styles.buttonTabHeader
            }
            onPress={() => handleSetBookingType(enumTabBookingFlight.OneWay)}
          />
          <Button
            title={
              <CustomTitle
                title="Khứ hồi"
                style={
                  BookingFlightType == enumTabBookingFlight.TwoWay
                    ? styles.buttonTabHeaderTitleActive
                    : styles.buttonTabHeaderTitle
                }
              />
            }
            containerStyle={styles.buttonHeaderContainer}
            buttonStyle={
              BookingFlightType == enumTabBookingFlight.TwoWay
                ? styles.buttonTabHeaderActive
                : styles.buttonTabHeader
            }
            onPress={() => handleSetBookingType(enumTabBookingFlight.TwoWay)}
          />
        </View>
      </View>

      <View style={styles.tabBody}>
        <View style={styles.tabBodyContent}>
          <DatePickerInputWithLabelBorder/>
          {/* <InputWithLabelBorder
            inputPlaceHolder="Nơi đi"
            labelText="From"
            leftIcon={{type: 'material', name: 'flight-takeoff'}}
          />
          <InputWithLabelBorder
            inputPlaceHolder="Nơi đến"
            labelText="To"
            leftIcon={{type: 'material', name: 'flight-land'}}
            boxContainerPropStyle={{marginTop: PALLETE_SPACE.marginElements}}
          /> */}
                  <InputSelectWithLabelBorder
            selectData={dataLocation}
            keywordLabel='Ten'
            keywordValue='Ma'
            labelText='Chọn nơi đi'
            inputPlaceHolder='Chọn nơi đi'
            onSelect={handleSelectLocation}
            boxContainerPropStyle={{marginTop:PALLETE_SPACE.marginElements}}
            renderDropdownIcon={()=><Icon style={{paddingRight:4}} type='material' name='flight-takeoff'/>}
            dropdownIconPosition={'left'}
            isSearch={true}
          />
                  <InputSelectWithLabelBorder
            selectData={dataLocation}
            keywordLabel='Ten'
            keywordValue='Ma'
            labelText='Chọn nơi đến'
            inputPlaceHolder='Chọn nơi đến'
            onSelect={handleSelectLocation}
            boxContainerPropStyle={{marginTop:PALLETE_SPACE.marginElements}}
            renderDropdownIcon={()=><Icon style={{paddingRight:4}} type='material' name='flight-land'/>}
            dropdownIconPosition={'left'}
            isSearch={true}
          />
          <View style={styles.formTwoInput}>
            <InputWithLabelBorder
              boxContainerPropStyle={{
                flex: 1,
                marginTop: PALLETE_SPACE.marginElements,
              }}
              inputPlaceHolder="Ngày đi"
              labelText="Ngày khởi hành"
              leftIcon={{type: 'material-community', name: 'calendar-month'}}
            />
            {BookingFlightType == enumTabBookingFlight.TwoWay && (
              <InputWithLabelBorder
                inputPlaceHolder="Ngày về"
                labelText="Ngày trở về"
                leftIcon={{type: 'material', name: 'flight-land'}}
                boxContainerPropStyle={{
                  flex: 1,
                  marginTop: PALLETE_SPACE.marginElements,
                }}
              />
            )}
          </View>
          <View style={styles.formTwoInput}>
            <InputWithLabelBorder
              boxContainerPropStyle={{
                flex: 1,
                marginTop: PALLETE_SPACE.marginElements,
              }}
              inputPlaceHolder="1 người lớn"
              labelText="Số lượng"
            />
              <InputWithLabelBorder
                inputPlaceHolder="Phổ thông"
                labelText="Hạng vé"
                boxContainerPropStyle={{
                  flex: 1,
                  marginTop: PALLETE_SPACE.marginElements,
                }}
              />
            
          </View>


        </View>
      </View>
      <View></View>
    </View>
  );
};

interface CustomTitleProps {
  title?: string;
  style?: {};
}

const CustomTitle: React.FC<CustomTitleProps> = ({title, style}) => {
  return (
    <View>
      <Text style={style}>{title}</Text>
    </View>
  );
};

export default BookingFlight;

const styles = StyleSheet.create({
  box: {backgroundColor: '#272727', width: 50, height: 50},
  tabHeader: {
    marginTop: PALLETE_SPACE.marginElements,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  tabHeaderContent: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  tabBody: {
    marginTop: PALLETE_SPACE.marginElements,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  tabBodyContent: {
    padding: PALLETE_SPACE.paddingElements,
    width: '100%',
  },
  formTwoInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: PALLETE_SPACE.paddingElements,
  },

  buttonHeaderContainer: {
    width: '50%',
  },
  buttonTabHeader: {
    // width:'50%',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  buttonTabHeaderActive: {
    // width:'50%',
    borderRadius: 30,
    backgroundColor: PALLATE.primaryColor,
  },
  buttonTabHeaderTitle: {
    color: PALLATE.inActiveColor,
  },
  buttonTabHeaderTitleActive: {
    color: '#fff',
  },
  tabHeaderItemActive: {},
  tabHeaderItem: {},
  tabContent: {},
});

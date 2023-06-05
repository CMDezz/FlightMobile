import React, {useState} from 'react';
import {View, TextInput, Keyboard, Alert, StyleSheet, Text} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';

import {Input, Button, Tab, Icon} from '@rneui/themed';
import {enumTabBookingFlight, enumTabBookingFlightProp} from './utils/enum';
import {PALLATE, PALLETE_SPACE} from '@Common/const';

import InputWithLabelBorder from '@Control/Input/InputWithLabelBorder';
import InputSelectWithLabelBorder from '@Control/InputSelect/InputSelectWithLabelBorder';
import {dataHangVe, dataLocation, dataSoLuong} from './utils/data';
import {KeyboardAvoidingView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePickerInputWithLabelBorder from '@Control/DatePicker/DatePickerInputWithLabelBorder';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenProps} from '@Screens/HomeScreen';
interface FormData {
  NoiDi: string | undefined;
  NoiDen: string | undefined;
  NgayDi: Date | undefined;
  NgayVe: Date | undefined;
  SoLuong: number | undefined;
  HangVe: number | undefined;
}

const BookingFlight = () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('data ', data);

    navigation.navigate('SearchResultLayout', {dataSearch: data});
  };

  const navigation = useNavigation<StackNavigationProp<HomeScreenProps>>();

  const [BookingFlightType, setBookingFlightType] = useState<number>(
    enumTabBookingFlight.OneWay,
  );

  const handleSetBookingType = (value: number) => {
    if (BookingFlightType == value) return;
    Keyboard.dismiss();
    setBookingFlightType(value);
  };

  const handleSelectLocation = (selectedItem: {}, index: number) => {};

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
          <Controller
            control={control}
            rules={{required: true}}
            name="NoiDi"
            render={({field: {onChange, onBlur, value}}) => {
              return (
                <InputSelectWithLabelBorder
                  selectData={dataLocation}
                  keywordLabel="Ten"
                  keywordValue="Ma"
                  labelText="Chọn nơi đi"
                  inputPlaceHolder="Chọn nơi đi"
                  onSelect={item => {
                    return onChange(item.Ma);
                  }}
                  boxContainerPropStyle={{
                    marginTop: PALLETE_SPACE.marginElements,
                  }}
                  renderDropdownIcon={() => (
                    <Icon
                      style={{paddingRight: 4}}
                      type="material"
                      name="flight-takeoff"
                    />
                  )}
                  dropdownIconPosition={'left'}
                  isSearch={true}
                />
              );
            }}
          />
          {errors.NoiDi && (
            <Text style={styles.formErrText}>Không được để trống</Text>
          )}

          <Controller
            control={control}
            name="NoiDen"
            rules={{required: true}}
            render={({field: {onChange}}) => {
              return (
                <InputSelectWithLabelBorder
                  selectData={dataLocation}
                  keywordLabel="Ten"
                  keywordValue="Ma"
                  labelText="Chọn nơi đến"
                  inputPlaceHolder="Chọn nơi đến"
                  onSelect={item => {
                    return onChange(item.Ma);
                  }}
                  boxContainerPropStyle={{
                    marginTop: PALLETE_SPACE.marginElements,
                  }}
                  renderDropdownIcon={() => (
                    <Icon
                      style={{paddingRight: 4}}
                      type="material"
                      name="flight-land"
                    />
                  )}
                  dropdownIconPosition={'left'}
                  isSearch={true}
                />
              );
            }}
          />
          {errors.NoiDen && (
            <Text style={styles.formErrText}>Không được để trống</Text>
          )}

          <View style={styles.formTwoInput}>
            <Controller
              control={control}
              name="NgayDi"
              rules={{required: true}}
              render={({field: {onChange}}) => {
                return (
                  <DatePickerInputWithLabelBorder
                    labelText="Ngày đi"
                    placeholder="Chọn ngày đi"
                    onChange={date => {
                      return onChange(date?.toISOString());
                    }}
                    minDate={new Date()}
                    inputContainerPropStyle={{
                      flex: 1,
                      marginTop: PALLETE_SPACE.marginElements,
                    }}
                  />
                );
              }}
            />
            {errors.NgayDi && (
              <Text style={styles.formErrText}>Không được để trống</Text>
            )}

            {BookingFlightType == enumTabBookingFlight.TwoWay && (
              <>
                <Controller
                  control={control}
                  name="NgayVe"
                  rules={{required: true}}
                  render={({field: {onChange}}) => {
                    return (
                      <DatePickerInputWithLabelBorder
                        labelText="Ngày về"
                        minDate={new Date()}
                        placeholder="Chọn ngày về"
                        onChange={date => {
                          return onChange(date?.toISOString());
                        }}
                        inputContainerPropStyle={{
                          flex: 1,
                          marginTop: PALLETE_SPACE.marginElements,
                        }}
                      />
                    );
                  }}
                />
                {errors.NgayVe && (
                  <Text style={styles.formErrText}>Không được để trống</Text>
                )}
              </>
            )}
          </View>
          <View style={styles.formTwoInput}>
            <Controller
              name="SoLuong"
              control={control}
              rules={{required: true}}
              render={({field: {onChange}}) => {
                return (
                  <InputSelectWithLabelBorder
                    boxContainerPropStyle={{
                      flex: 1,
                      marginTop: PALLETE_SPACE.marginElements,
                    }}
                    labelText="Số lượng"
                    inputPlaceHolder="Chọn số lượng"
                    onSelect={onChange}
                    selectData={dataSoLuong}
                    keywordLabel="label"
                    keywordValue="value"
                  />
                );
              }}
            />
            {errors.SoLuong && (
              <Text style={styles.formErrText}>Không được để trống</Text>
            )}
            <Controller
              name="HangVe"
              control={control}
              rules={{required: true}}
              render={({field: {onChange}}) => {
                return (
                  <InputSelectWithLabelBorder
                    boxContainerPropStyle={{
                      flex: 1,
                      marginTop: PALLETE_SPACE.marginElements,
                    }}
                    labelText="Hạng vé"
                    inputPlaceHolder="Chọn hạng vé"
                    selectData={dataHangVe}
                    onSelect={onChange}
                    keywordLabel="label"
                    keywordValue="value"
                  />
                );
              }}
            />
            {errors.HangVe && (
              <Text style={styles.formErrText}>Không được để trống</Text>
            )}
          </View>
        </View>
        <Button
          containerStyle={{
            paddingHorizontal: PALLETE_SPACE.paddingElements,
            paddingBottom: PALLETE_SPACE.paddingElements,
          }}
          onPress={handleSubmit(onSubmit)}
          buttonStyle={styles.submitButtonStyle}
          title="Tìm chuyến bay"
        />
        <View></View>
      </View>
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
  submitButtonStyle: {
    backgroundColor: PALLATE.primaryColor,
    color: '#fff',
    borderRadius: 5,
  },
  tabHeaderItemActive: {},
  tabHeaderItem: {},
  tabContent: {},
  formErrText: {
    color: '#ff5757',
  },
});

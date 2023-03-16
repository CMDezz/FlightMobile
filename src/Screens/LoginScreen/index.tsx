import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Platform,
  StyleSheet,
} from 'react-native';
import {Input,Button} from '@rneui/themed';
import {KeyboardAvoidingView} from 'react-native';

interface Props {}

const LoginSreen: React.FC<Props> = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{flex: 1}}>
      <ImageBackground
        source={require('./../../../assets/image/main-background.png')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={styles.boxContainer}>
            <View style={styles.boxFormGroup}>
              {/* Block UserName */}
              <View>
                <Input placeholder="Tên đăng nhập" />
              </View>
              <View>
                <Input placeholder="Mật khẩu" />
              </View>
              <View>
                <Button
                    title={'Đăng nhập'}
                    buttonStyle={{borderRadius:5}}
                    containerStyle={{padding:10}}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginSreen;

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxFormGroup:{
    width:300,
    padding:15,
    backgroundColor:'#f5f5f5',
    borderRadius:10
  }
});

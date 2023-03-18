import React,{MutableRefObject,RefObject, useRef,useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput ,
  Image,
  Alert
} from 'react-native';
import {Input,Button} from '@rneui/themed';
import {KeyboardAvoidingView} from 'react-native';
import useHook from './Hooks/useHook'
import { Input as BaseInput } from '@rneui/base';
interface Props {}
const LoginSreen: React.FC<Props> = props => {
  const {
    handlePassword,
    handleUsername,
    Login,
    loadingLogin,
    loginSuccess,
    Password,
    Username,
    Validate,
  } = useHook();
  const refPassword = useRef<BaseInput & TextInput>(null);

  // useEffect(()=>{
  //   if (loginSuccess){
  //     Alert.alert('Đăng nhập','Đăng nhập thành công')
  //   }
  // },[loginSuccess])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{flex: 1}}>
      <ImageBackground
        source={require('./../../../assets/image/main-background.png')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={styles.boxContainer}>
            <View style={{marginTop:-80,paddingBottom:20}}>
              <Image source={require('./../../../assets/image/Logo.png')}></Image>
            </View>
            <View style={styles.boxFormGroup}>
              {/* Block UserName */}
              <View>
                <Input 
                value={Username}
                onChangeText={handleUsername}
                errorMessage={Validate.Username}
                errorStyle={{color:'#ff5555'}}
                placeholder="Tên đăng nhập" 
                onSubmitEditing={() => refPassword.current && refPassword.current.focus()}
                />
              </View>
              <View>
                <Input
                  ref={refPassword}
                  value={Password}
                  onChangeText={handlePassword}
                  errorMessage={Validate.Password}
                  errorStyle={{color:'#ff5555'}}
                  secureTextEntry
                  placeholder="Mật khẩu" />
              </View>
              <View>
                <Button
                    title={'Đăng nhập'}
                    buttonStyle={{borderRadius:5}}
                    containerStyle={{padding:10}}
                    onPress={()=>{Keyboard.dismiss();Login()}}
                    loading={loadingLogin}
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

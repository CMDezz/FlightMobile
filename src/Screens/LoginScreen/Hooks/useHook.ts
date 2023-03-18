import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import SplashScreen from '@Screens/SplashScreen';
import Actions from '@Redux/Actions'
import FunctionCommon from '@Common/function';

interface modelValidateProp {
    Username?:string,
    Password?:string,
}

const modelValidate:modelValidateProp = {
    Username:undefined,
    Password:undefined,
}
interface Props{

}


const useHook = () =>{
    const dispatch = useDispatch();

    const [Validate,setValidate] = useState<modelValidateProp>(modelValidate)
    const [Password,setPassword] = useState<string | undefined>()
    const [Username,setUsername] = useState<string | undefined>()
    const [loadingLogin,setLoadingLogin] = useState<boolean>(false)
    const [loginSuccess,setLoginSuccess] = useState<boolean>(false)
    const handleUsername = (_username:string|undefined)=>{
        setValidate({...Validate,Username:undefined})
        setUsername(_username)
    }

    
    const handlePassword = (_password:string|undefined)=>{
        setValidate({...Validate,Password:undefined})
        setPassword(_password)
    }

    const Login = async () =>{
        setLoadingLogin(true)
        let _model = {...modelValidate}
        if (Username!= 'Admin') _model.Username='Hint: Admin';
        if (Password!= 'Admin@123') _model.Password='Hint: Admin@123';

        if (_model.Username || _model.Password){
            setValidate(_model)
        }else{
            await FunctionCommon.SleepMs(3000)
            setLoginSuccess(true);
            dispatch(Actions.AuthAction.ActSetLogin(true))
        }


        setLoadingLogin(false)
    }

    return {
        handlePassword,
        handleUsername,
        Login,
        Validate,
        loadingLogin,
        loginSuccess,
        Password,
        Username
    }
}

export default useHook;
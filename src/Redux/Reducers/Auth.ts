import AUTH_TYPES from "../Types/Auth";
import { ActionType } from "../Actions/index"

interface initialStateType {
    AvatarUrl: string,
    LogIn:boolean,
}


const initialState = {
    AvatarUrl:'auth',
    LogIn:false,
}

const AuthReducer = (state:initialStateType=initialState,action:ActionType)=>{
    switch(action.type){
        case AUTH_TYPES.MODIFY_AVATAR:
            return Object.assign({}, state, {
                AvatarUrl: action.payload,
              });
        case AUTH_TYPES.LOG_IN:
            return Object.assign({}, state, {
                LogIn: action.payload,
              });
        
        default :
        return Object.assign({}, state)
    }
}

export default AuthReducer
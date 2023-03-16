import AUTH_TYPES from "../Types/Auth"
import {ActionType} from './index'

export const ActModifyAvatar = (payload:any) :ActionType =>{
    return {
        type:AUTH_TYPES.MODIFY_AVATAR,
        payload:payload
    }
}

export const ActSetLogin = (payload:boolean):ActionType=>{
    return {
        type:AUTH_TYPES.LOG_IN,
        payload:payload
    }
}
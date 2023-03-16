import BOOKING_TYPES from "../Types/Booking"
import {ActionType} from './index'


export const ActModifyValue = (payload:any):ActionType =>{
    return {
        type:BOOKING_TYPES.MODIFY_VALUE,
        payload:payload
    }
}
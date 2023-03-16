import BOOKING_TYPES from "../Types/Booking";
import { ActionType } from "../Actions/index"

interface initialStateType {
    Value: string,
}


const initialState = {
    Value:''
}

const BookingReducer = (state:initialStateType=initialState,action:ActionType)=>{
    switch(action.type){
        case BOOKING_TYPES.MODIFY_VALUE:
            return Object.assign({}, state, {
                Value: action.payload,
              });
        default :
        return Object.assign({}, state)
    }
}

export default BookingReducer
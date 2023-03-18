export interface ActionType {
    type:string,
    payload?:any,
}

import * as AuthAction from './Auth';
import * as BookingAction from './Booking';

export default {
    AuthAction,
    BookingAction
}
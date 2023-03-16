import { combineReducers } from "redux";

import AuthReducer from "./Auth";
import BookingReducer from "./Booking";

export default combineReducers({
    AuthReducer:AuthReducer,
    BookingReducer:BookingReducer,
})
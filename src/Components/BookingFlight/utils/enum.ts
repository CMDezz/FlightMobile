export interface enumTabBookingFlightProp {
    [key:string]:number
}
export interface enumTabBookingTextProp {
    [key:string]:string
}

export const enumTabBookingFlight:enumTabBookingFlightProp ={
    OneWay:0,
    TwoWay:1,
}
export const enumTabBookingFlightText:enumTabBookingTextProp ={
    OneWay:'Một chiều',
    TwoWay:'Khứ hồi',
}
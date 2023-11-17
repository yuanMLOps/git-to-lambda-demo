import BookingForm from './BookingForm';
import React, {useReducer} from "react";
import { fetchAPI, submitAPI } from './Shared'
import { useNavigate } from "react-router-dom";

export const updateTime = (states, action) => (fetchAPI(action.type));

export const initializeTimes =() => {
    const today = new Date();
    return fetchAPI(today);
}


const BookingPage = () => {
   const [states, dispatch] = useReducer(updateTime, initializeTimes());
   const navigate = useNavigate();

   const submitForm = (formData) => {
    const isValid = submitAPI(formData);
     if (isValid) {
            navigate("/ConfirmedBooking");
    }
}
   return <BookingForm availableTimes={states} dispatch={dispatch} submitForm={submitForm}/>
}

export default BookingPage;


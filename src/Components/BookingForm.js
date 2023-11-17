import React, {useState} from "react";
import {submitAPI}  from "./Shared";
import LoadingSpinner from './Spinner';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

const BookForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        resDate: new Date(),
        resTime: "",
        guests: 2,
        occasion: "Birthday"
    })

    const handleChange = (e) => {
        const newState = {...formData};
        const fieldId = e.target.id;
        const value = e.target.value;
        newState[fieldId] = value;
        setFormData(newState);
    }

    return (
        <section className="App-booking-page" aria-label="booking page">
            <h1 className="App-booking-heading">BOOK A TABLE NOW</h1>
            <form className="App-booking-form" data-testid="bookingForm" aria-label="table reservation" onSubmit={e => {
            e.preventDefault();
            setIsLoading(true)
            sleep(550).then(() => {
                props.submitForm(formData);
            setIsLoading(false);
             });
            }}>
                <label htmlFor="resDate">Choose date*</label>
                <input type="date" id="resDate" value={formData.resDate} required aria-label="date of reversvation" onChange=
                {
                    e => {
                        handleChange(e);
                        props.dispatch({type: new Date(formData.resDate)});
                        // alert(JSON.stringify(props))
                    }
                }></input>
                <label htmlFor="resTime">Choose time*</label>
                <select id="resTime" value={formData.resTime} required aria-label="time of reservation" onChange={ e => handleChange(e)}>
                    {
                        props.availableTimes.map((time =>(<option key={time}>{time}</option>)))
                    }
                </select>
                <label htmlFor="guests">Number of guests*</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required aria-label="guests of your reservation" value={formData.guests} onChange={e => handleChange(e)}></input>
                <label htmlFor="occasion">Occasion*</label>
                <select id="occasion" value={formData.occasion} required aria-label="your occasion" onChange={e => handleChange(e)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div className="button-container">
                    { isLoading ? <LoadingSpinner /> : <div></div> }

                <button disabled={!submitAPI(formData)} type="submit" aria-label="submit" className="App-button" >Make Your reservation</button>

                </div>

            </form>
        </section>
)}

export default BookForm;

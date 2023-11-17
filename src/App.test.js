import {  fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Components/BookingPage';
import {updateTime, initializeTimes} from './Components/BookingPage';
import { fetchAPI } from './Components/Shared';
import {BrowserRouter} from 'react-router-dom';

const initialTimeSlots = fetchAPI(new Date());
const testDate = new Date("2022-03-25");
const updatedSlots = fetchAPI(testDate);

test('Renders the BookingForm heading', ()=> {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
 );
  const headingElement = screen.getByText("BOOK A TABLE NOW");
  expect(headingElement).toBeInTheDocument();
})

test('InitializeTimes return the correct initialize time slots', ()=> {
  const initialSlots = initializeTimes();
  expect(initialSlots).toEqual(initialSlots);
})

test('updateTime can exclude the Action.type date and return the modified list as new statecorrectly', ()=> {
 const action = {type: testDate};
 const slots = updateTime(initialTimeSlots, action);
 expect(slots).toEqual(updatedSlots);
})

test('Choose Date field in booking form has attrbiute of required', () => {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
  );
  const resDate = screen.getByLabelText(/Choose date*/);
  expect(resDate).toHaveAttribute('required');
})

test('Choose time field in booking form has attrbiute of required', () => {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
  );
  const resTime = screen.getByLabelText(/Choose time*/);
  expect(resTime).toHaveAttribute('required');
})

test('Number of guests field in booking form has attrbiute of required, min and max', () => {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
  );
  const guests = screen.getByLabelText(/Number of guests*/);
  expect(guests).toHaveAttribute('required');
  expect(guests).toHaveAttribute('min');
  expect(guests).toHaveAttribute('max');
})

test('Occasion in booking form has attrbiute of required', () => {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
  );
  const occasion = screen.getByLabelText(/Occasion*/);
  expect(occasion).toHaveAttribute('required');
})


test('Valid state unit test. "Make Your Reservation" button is enabled and form submit funtion is called if all form fileds are correct', ()=>{
  render(<BrowserRouter>
    <BookingPage />
 </BrowserRouter>);

const handleSubmit = jest.fn();

const resDate = screen.getByLabelText(/Choose date*/);
fireEvent.change(resDate, { target: { value: "2023-03-22" } });

const resTime = screen.getByLabelText(/Choose time*/);
fireEvent.change(resTime, { target: { value: "17:30" } });

const guests = screen.getByLabelText(/Number of guests*/);
fireEvent.change(guests, { target: { value: "4" } });

const occasion = screen.getByLabelText(/Occasion*/);
fireEvent.change(occasion, { target: { value: "Birthday" } });

// find the button element and simulate a click event
const submitButton = screen.getByRole("button");

// find form element by testId and set its onsubmit function to the mock function
const form = screen.getByTestId("bookingForm");
form.onsubmit = handleSubmit;

// fire click event of the submit button
fireEvent.click(submitButton);

// test if the button is enabled and the form submit function has been called
expect(submitButton).not.toHaveAttribute("disabled");
expect(handleSubmit).toHaveBeenCalled();
})

test('invalid state unit test. "Make Your Reservation" button is disabled and form submit funtion is not called if number of guests is negative', ()=>{
  render(<BrowserRouter>
    <BookingPage />
 </BrowserRouter>);

const handleSubmit = jest.fn();

const resDate = screen.getByLabelText(/Choose date*/);
fireEvent.change(resDate, { target: { value: "2023-03-22" } });

const resTime = screen.getByLabelText(/Choose time*/);
fireEvent.change(resTime, { target: { value: "17:00" } });

const guests = screen.getByLabelText(/Number of guests*/);
fireEvent.change(guests, { target: { value: "-4" } });

const occasion = screen.getByLabelText(/Occasion*/);
fireEvent.change(occasion, { target: { value: "Birthday" } });

// find the button element and simulate a click event
const submitButton = screen.getByRole("button");

// find form element by testId and set its onsubmit function to the mock function
const form = screen.getByTestId("bookingForm");
form.onsubmit = handleSubmit;

// fire click event of the submit button
fireEvent.click(submitButton);

// test if the button is disabled and the form submit function has not been called
expect(submitButton).toHaveAttribute("disabled");
expect(handleSubmit).not.toHaveBeenCalled();
})


test('invalid state unit test. "Make Your Reservation" button is disabled and form submit funtion is not called if date field is not selected', ()=>{
  render(<BrowserRouter>
    <BookingPage />
 </BrowserRouter>);

const handleSubmit = jest.fn();

const resDate = screen.getByLabelText(/Choose date*/);
fireEvent.change(resDate, { target: { value: "" } });

const resTime = screen.getByLabelText(/Choose time*/);
fireEvent.change(resTime, { target: { value: "17:00" } });

const guests = screen.getByLabelText(/Number of guests*/);
fireEvent.change(guests, { target: { value: "-4" } });

const occasion = screen.getByLabelText(/Occasion*/);
fireEvent.change(occasion, { target: { value: "Birthday" } });

// find the button element and simulate a click event
const submitButton = screen.getByRole("button");

// find form element by testId and set its onsubmit function to the mock function
const form = screen.getByTestId("bookingForm");
form.onsubmit = handleSubmit;

// fire click event of the submit button
fireEvent.click(submitButton);

// test if the button is disabled and the form submit function has not been called
expect(submitButton).toHaveAttribute("disabled");
expect(handleSubmit).not.toHaveBeenCalled();
})
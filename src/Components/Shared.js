import salad_img from '../images/greek_salad_2.jpg';
import bruschetta_img from '../images/Bruschetta_mix.jpg';
import lemoncake_img from '../images/lemon_cake_2.jpg';

import Home from "./Home";
import About from "./About";
import BookingPage from "./BookingPage";

export const links = [
    {
        path: "/",
        name: "Home",
        element: <Home/>
    },
    {
        path: "/About",
        name: "About",
        element: <About/>
    },
    {
        path: "/Menu",
        name: "Menu",
        element: null
    }
    ,
    {
        path: "/Table Reservations",
        name: "Table Reservations",
        element: <BookingPage />
    },
    {
        path: "/OrderOnline",
        name: "Order Online",
        element: null
    },
    {
        path: "/Login",
        name: "Login",
        element: null
    }
];

export const specialItems = [
    {
        name: "Greek Salad",
        img: salad_img,
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta chesses, garnished with curnchy garlic and rosemary croutons."
    },
    {
        name: "Bruschetta",
        img: bruschetta_img,
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smared with garlic and seasoned with salt and olive oil."
    },
    {
        name: "Lemon Dessert",
        img: lemoncake_img,
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    let isValid = false;
    if (formData.resDate && formData.resTime && formData.guests>=1 && formData.guests<=10) {
        isValid = true;
    }
    return isValid;
};


import {Routes, Route,} from 'react-router-dom';
import { links } from "./Shared"
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () =>{

    return (

    <main className="App-main" aria-label="main frame">
        <Routes>
            {
                links.map((link, index) => (
                    <Route key={index} path={link.path} element={link.element} />
                ))
            }
            <Route path="/ConfirmedBooking" element= {<ConfirmedBooking/>} />
        </Routes>

    </main>
)}

    export default Main;
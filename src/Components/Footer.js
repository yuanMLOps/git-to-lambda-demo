import logo from '../images/Asset 9@4x.png';
import { links } from './Shared';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="App-footer" aria-label="footer">
        <img className="foot-logo" src={logo} height="180rem" alt="Little Lemon logo" aria-label="little lemon logo"/>
        <ul className={"App-ui"} aria-label="footer list">
            <li className={"App-link-lead"} >Doormat Navigation</li>
            {
                links.map((link, index) => (
                <li key={index}>
                    <Link aria-label={link.name} to={link.path} className={"App-link"}>{link.name}</Link>
                </li>)
                )
            }
        </ul>
        <ul className="App-ui" aria-label="contact information">
            <li className={"App-link-lead"}>Contact</li>

            <li className={"App-link"} >Address</li>
            <li className={"App-link"}>Phone number</li>
            <li className={"App-link"}>Email</li>
        </ul>
        <ul className="App-ui">
            <li className={"App-link-lead"}>Social Media Links</li>

            <li className={"App-link"}>Address</li>
            <li className={"App-link"}>Phone number</li>
            <li className={"App-link"}>Email</li>
        </ul>
    </footer>
)

export default Footer;
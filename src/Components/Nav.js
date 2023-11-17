import { NavLink } from 'react-router-dom'
import { links } from './Shared'
import logo from '../images/Asset 16@4x.png'

function Nav() {
    return (
      <nav aria-label='primary'>
        <ul className={"App-ui-head"} aria-label="navigation list">
            <li><img className="App-logo" width="150px" src={logo}  alt="Little Lemon Logo" /></li>
              {
                  links.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path} className={({ isActive }) => (isActive ? 'App-active' : 'App-link')}> {link.name} </NavLink>
                    </li>)
                  )
                }
        </ul>
      </nav>
    )
}

export default Nav;
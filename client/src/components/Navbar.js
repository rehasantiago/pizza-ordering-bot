import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Slider from './Slider';
import Footer from './Footer';

const Navbar = (props) => {
    return(
        <>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Yo Yo Pizza</Link>
                    <ul className="right">
                        <li>
                            <NavLink to='/signup'>Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to='/signin'>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Slider/>
            <Footer/>
        </>
    )
}

export default Navbar;

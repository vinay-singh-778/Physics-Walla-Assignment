import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom';


function Nav() {
    const navStyle={
        color:'white',
        textDecoration:'none'
    }
	return (
		<nav>
            <Link to='/' style={navStyle}>
			<h3 className='nav-header'>
				<span>COVID-19</span>
                <span>INDIA</span>
			</h3>
            </Link>
			<ul className='nav-links'>
                <Link to='/about' style={navStyle}>
				<li>About</li>
                </Link>
			</ul>
		</nav>
	);
}
export default Nav;

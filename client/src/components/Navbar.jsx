import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><HashLink smooth to={`/#intro`} className="logo"><span>kika</span><span>dev</span></HashLink></li>
                    {/* <li><HashLink smooth to={`/#portfolio`}>PORTFOLIO</HashLink></li> */}
                    <li><HashLink smooth to={`/#about`}>ABOUT ME</HashLink></li>
                    <li><HashLink smooth to={`/#contact`}>CONTACT</HashLink></li>
                </ul>
            </nav>           
        </header>
    )
}

export default Navbar;

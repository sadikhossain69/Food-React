import React from 'react';
import './Navbar.css'
import Logo from '../../Images/Logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item navbar-link">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link active" aria-current="page" href="/">Contact</a>
                        <a className="nav-link active" aria-current="page" href="/">Team</a>
                        <a className="nav-link active" aria-current="page" href="/">About Us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
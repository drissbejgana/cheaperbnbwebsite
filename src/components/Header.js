import React from 'react';

import logo from '../images/logo-cheaperbnb.webp';
import { Link, NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <header>
        <nav className="navbar navbar-expand-lg pt-4 sticky-top p-3">
            <div className="container">            
              <Link to={'/'} className="navbar-brand ps-5" >
                <img src={logo} alt="logo-cheaperbnb" width="170px" height="35px" />
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              

              <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item">
                    <NavLink to={'/'} className="nav-link fw-semibold" aria-current="page">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Deals
                        </Link>
                        <ul class="dropdown-menu">
                          <li><Link to={'Experiences/massage-marrakech'} className="dropdown-item">Massage Marrakech</Link></li>
                          <li><Link to={'Experiences/agafay-luxury-camp'} className="dropdown-item" >Agafay Desert</Link></li>
                        </ul>
                  </li>
                </ul>
                <button id="btndeal"  className="btn btn-outline fw-semibold ms-5 pe-5 ps-5" type="submit">Submit a deal</button>
              </div>

            </div>
          </nav>
      </header>
    );
};

export default Header;
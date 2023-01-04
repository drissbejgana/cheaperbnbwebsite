import React from 'react';
import logo from '../images/logo-cheaperbnb.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container">
        <footer id="footer" className="mt-5 w-50 m-auto">
            <div className="row">
              <div className="col-6">
                 <img width="170px" src={logo} alt="logo-cheaperbnb" />
              </div>
        
              <div className="col-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">Home</Link></li>
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">Deals</Link></li>
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">News</Link></li> 
                </ul>
              </div>
        
              <div className="col-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">Support</Link></li>
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">Privacy</Link></li>
                  <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-muted">Terms</Link></li>
                </ul>
              </div>
        
            </div>
        
        
            <div className="d-flex justify-content-center mt-1">
              <p className="text-muted">a service by safetours LTD,All right reserved</p>
            </div>
          </footer>

      </div>
    );
};

export default Footer;
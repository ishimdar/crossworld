import React, { Fragment } from 'react';
import '../index.css';

import logo from '../../../assets/images/logo.png';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="headerBox">
          <div className="logo">
            <a href="">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="headerMenuLogin">
            <div className="menuBox">
              <ul>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">Seeds</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="contributLogin">
              <ul>
                <li className="contribute">
                  <a href="">
                    Contribute
                  </a>
                </li>
                <li className="login">
                  <a href="">
                    <em></em>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

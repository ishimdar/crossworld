import React, { Fragment } from 'react';
import '../index.css';

import logo from '../../../assets/images/logo.png';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerBox">
          <div className="footerItem">
            <div className="item itemLogo">
              <div className="footerLogo">
                <a href="">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is 
simply dummy text of the printing industry. Lorem Ipsum is simply dummy 
text of the printing industry. 
              </p>

              <div className="followUs">
                <h5>
                  Follow Us
                </h5>
                <ul className="follousUl">
                  <li className="flFb">
                    <a href=""></a>
                  </li>
                  <li className="flIns">
                    <a href=""></a>
                  </li>
                  <li className="flTwi">
                    <a href=""></a>
                  </li>
                  <li className="flLink">
                    <a href=""></a>
                  </li>
                  <li className="flTin">
                    <a href=""></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item itemLinks">
              <h4>
                Quick Links
              </h4>
              <ul className="qLiksUl">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contribruters</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
              </ul>
            </div>
            <div className="item newsLetter">
              <h4>
                News Letters 
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>

              <form className="emailSubscribe">
                <input type="email" placeholder="Enter email" className="emailInput" />
                <input type="submit" className="emailSubmit" value="SUBSCRIBE" name="SUBSCRIBE" />
              </form>
            </div>
          </div>

          <hr />

          <div className="copyRight">
            <p>
              © 2020, CrossWorld Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

import React, { Fragment } from 'react';
import '../index.css';

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="bannerBox">
          <div className="bannerLst">
            <div className="bannerText">
              <h2>Collective </h2>
              <h2>
                Story Writing Platform
              </h2>
            </div>
            <h5>
              Create crowdsourced stories on story prompts, written by the people & for the people
            </h5>

            <div className="formAcces">
              <form className="emailForm">
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="submitButton">
                  <input type="button" className="submitBtn" value="Get early Access" name="Get early Access" />
                </div>
              </form>
            </div>

            <div className="seeSeed">
              <p>
                We send you seed on which you can write exciting stories.
                <a href="">
                  See Seeds
                </a>
              </p>
            </div>

            <div className="writers">
              <p>
                34 Writers are already creating exciting stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;

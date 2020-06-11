import React, { Fragment } from 'react';
import '../index.css';

import selectSeed from '../../../assets/images/selectSeed.svg';
import create from '../../../assets/images/cerate.svg';
import published from '../../../assets/images/published.svg';

const HowItWorks = (props) => {
  return (
    <div className="howItsWork">
      <div className="container">
        <div className="howItsWorkBox">
          <div className="howWorkxText">
            <h3>
             <em></em> How it works
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing industry. 
            </p>
          </div>

          <div className="selectCrePub">
            <div className="selectSeed">
              <div className="seedImg">
                <img src={selectSeed} alt="" />
              </div>
              <div className="seedContenet">
                <h4>
                  SELECT SEED
                </h4>
                <div className="seedBorder">
                  <span></span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing industry. 
                </p>
              </div>
            </div>
            <div className="selectSeed">
              <div className="seedImg">
                <img src={create} alt="" />
              </div>
              <div className="seedContenet">
                <h4>
                CREATE MULTIPLE STORYLINE
                </h4>
                <div className="seedBorder">
                  <span></span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing industry. 
                </p>
              </div>
            </div>
            <div className="selectSeed">
              <div className="seedImg">
                <img src={published} alt="" />
              </div>
              <div className="seedContenet">
                <h4>
                  Published & Get Fame
                </h4>
                <div className="seedBorder">
                  <span></span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing industry. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;

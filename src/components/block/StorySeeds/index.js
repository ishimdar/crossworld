import React, { Fragment } from 'react';
import '../index.css';

import maxresDefault from '../../../assets/images/maxresdefault.png';

const StorySeeds = (props) => {
  return (
    <div className="storySeeds">
      <div className="container">
        <div className="storySeedsBox">
          <div className="howWorkxText">
            <h3>
             <em></em> Story Seeds
             <span></span>
             <a href="">
              See All
             </a>
            </h3>
          </div>

          <div className="seedList">
            <ul className="seedListUl">
              <li className="seedListLi">
                <div className="seedItem">
                  <div className="seedItemLst">
                    <h3>
                      Moonage Daydream
                    </h3>
                    <ul className="seedHasUl">
                      <li>
                        <a href="">#Crime</a>
                      </li>
                      <li>
                        <a href="">#Sci-fy</a>
                      </li>
                    </ul>
                    <div className="seedType">
                      <div className="seedTypeText">
                        <strong>
                          World Type:
                        </strong>
                        Planet
                      </div>
                      <div className="seedTypeText">
                        <strong>
                          Name:
                        </strong>
                        Zorong
                      </div>
                      <div className="seedTypeText">
                        <strong>
                          Description:
                        </strong>
                        A planet 2 million light years away from earth
                      </div>
                    </div>

                    <div className="seedDescription">
                      <h5>
                        World Characteristics 
                      </h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry
                      </p>
                    </div>

                    <div className="sinUpWrite">
                      <a href="">
                        Signup & Write Story
                      </a>
                      <span>
                        102 Contributor, 12 Stories, 8 Incomplete Stories
                      </span>
                    </div>
                  </div>
                  <div className="seedItemRst">
                    <img src={maxresDefault} alt="" />
                  </div>
                </div>
              </li>

              
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default StorySeeds;

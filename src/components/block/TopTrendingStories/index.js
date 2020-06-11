import React, { Fragment } from 'react';
import '../index.css';

import adamWarlock from '../../../assets/images/adam-warlock.png';

const TopTrendingStories = (props) => {
  return (
    <div className="topTreanding">
      <div className="container">
        <div className="topTreandingBox">
          <div className="howWorkxText">
            <h3>
             <em></em> Top Trending Stories
             <span></span>
             <a href="">
              See All
             </a>
            </h3>
          </div>

          <div className="storyList">
            <ul className="storuListUl">
              <li className="storuListli">
                <div className="storyItem">
                  <div className="stItemImg">
                    <img src={adamWarlock} alt="" />
                  </div>
                  <div className="stItemText">
                    <h3>
                      #1. ADAM WARLOCK
                    </h3>
                    <div className="stItemLikes">
                      <span className="stLikes">
                        2,355 Likes
                      </span>
                      <span className="stFan">
                        #Fan Story
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry… 
                      <a href="">
                        Read full story 
                      </a>
                    </p>

                    <hr/>

                    <div className="stHastag">
                      <ul className="stHastagUl">
                        <li>
                          <a href="">#Adventure</a>
                        </li>
                        <li>
                          <a href="">#Action</a>
                        </li>
                        <li>
                          <a href="">#Sci-Fy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="storuListli">
                <div className="storyItem">
                  <div className="stItemImg">
                    <img src={adamWarlock} alt="" />
                  </div>
                  <div className="stItemText">
                    <h3>
                      #1. ADAM WARLOCK
                    </h3>
                    <div className="stItemLikes">
                      <span className="stLikes">
                        2,355 Likes
                      </span>
                      <span className="stFan">
                        #Fan Story
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry…
                      <a href="">
                        Read full story 
                      </a>
                    </p>

                    <hr/>

                    <div className="stHastag">
                      <ul className="stHastagUl">
                        <li>
                          <a href="">#Adventure</a>
                        </li>
                        <li>
                          <a href="">#Action</a>
                        </li>
                        <li>
                          <a href="">#Sci-Fy</a>
                        </li>
                      </ul>
                    </div>
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

export default TopTrendingStories;

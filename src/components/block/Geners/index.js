import React, { Fragment } from 'react';
import '../index.css';

const Geners = (props) => {
  return (
    <div className="genres">
      <div className="container">
        <div className="genresBox">
          <div className="howWorkxText">
            <h3>
             <em></em> Geners
            </h3>
          </div>

          <div className="genresList">
            <ul className="genresListUl">
              <li className="genresListLi">
                <a href="">Horror</a>
              </li>
              <li className="genresListLi">
                <a href="">Action</a>
              </li>
              <li className="genresListLi">
                <a href="">Adventure</a>
              </li>
              <li className="genresListLi">
                <a href="">Magic</a>
              </li>
              <li className="genresListLi">
                <a href="">Horror</a>
              </li>
              <li className="genresListLi">
                <a href="">Action</a>
              </li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Geners;

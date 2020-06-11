import React, { Fragment } from 'react';
import '../index.css';

const FAQs = (props) => {
  return (
    <div className="faqs">
      <div className="container">
        <div className="faqsBox">
          <div className="howWorkxText">
            <h3>
             <em></em> FAQs
             <span></span>
             <a href="">
              See All
             </a>
            </h3>
          </div>

          <div className="faqList">
            <ul className="faqListUl">
              <li className="faqListLi">
                <div className="faqItem">
                  <h3>
                    How do I write an story?
                  </h3>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industr.Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industr.Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industr.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default FAQs;

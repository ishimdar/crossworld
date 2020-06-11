import React, { Component } from 'react';

import Header from '../../block/Header';
import Footer from '../../block/Footer';
import Banner from '../../block/Banner';
import FAQs from '../../block/FAQs';
import Geners from '../../block/Geners';
import HowItWorks from '../../block/HowItWorks';
import StorySeeds from '../../block/StorySeeds';
import TopTrendingStories from '../../block/TopTrendingStories';
import WhyCrossworld from '../../block/WhyCrossworld';
import Beready from '../../block/Beready';


class HomePage extends Component {

  render(){
    return(
      <div className="homePage">
        {/* <h2>I am Home Page</h2> */}
        <Header />
        <Banner />
        <HowItWorks />
        <WhyCrossworld />
        <TopTrendingStories />
        <StorySeeds />
        <Geners />
        <FAQs />
        <Beready />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
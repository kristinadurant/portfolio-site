import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Contact from '../components/Home/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home;

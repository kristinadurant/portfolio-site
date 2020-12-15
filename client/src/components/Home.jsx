import React from 'react';
import { TabsContextProvider } from '../context/TabsContext';
import Banner from './Home/Banner';
import About from './Home/About/About';
import Portfolio from './Home/Portfolio';
import Contact from './Home/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <Portfolio />
            <TabsContextProvider>
                <About />
            </TabsContextProvider>                     
            <Contact />
        </div>
    )
}

export default Home;

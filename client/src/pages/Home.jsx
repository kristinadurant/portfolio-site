import React from 'react';
import { TabsContextProvider } from '../context/TabsContext';
import Banner from '../components/Home/Banner';
import About from '../components/Home/About/About';
import Portfolio from '../components/Home/Portfolio';
import Contact from '../components/Home/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <TabsContextProvider>
                <About />
            </TabsContextProvider>           
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home;

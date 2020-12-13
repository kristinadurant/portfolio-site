import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <section id="intro">
            <h1>
                <p>You want to bring your idea to life?</p>
                <p>You need a pixel perfect website for your design?</p>
            </h1>
            <HashLink smooth to={`#contact`}>Contact kikadevelopment</HashLink>
        </section>
    )
}

export default Banner;

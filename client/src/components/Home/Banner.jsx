import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <section id="banner">
            <h1>
                <p>You want to bring your idea to life?</p>
                <p>You need a pixel perfect website for your design?</p>
            </h1>
            <p>Have any questions?</p>
            <Link>Contact kikadevelopment</Link>
        </section>
    )
}

export default Banner;

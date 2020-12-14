import React from 'react';

const Portfolio = () => {

    const portfolio = [
        {
            title: 'CLN ALT',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607876074/portfolio-site/Screen_Shot_2020-12-13_at_11.12.51_AM_pnw5c2.png',
            link: 'https://clnalt.herokuapp.com/',
        },
        {
            title: 'Pokecode',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607902250/portfolio-site/Screen_Shot_2020-12-13_at_6.30.33_PM_p8qlo3.png',
            link: 'https://pokedex-catchthemall.herokuapp.com/',
        },
        {
            title: 'Morning Sun Blog',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607901610/portfolio-site/Screen_Shot_2020-12-13_at_6.18.57_PM_ebdzeq.png',
            link: 'http://morningsunblog.com/'
        },
        {
            title: 'Schoen Builders',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607901939/portfolio-site/Screen_Shot_2020-12-13_at_6.25.24_PM_ar0cfh.png',
            link: 'http://schoenbuilders.com/',
        }
    ]
console.log(portfolio);
    return (
        <section id="portfolio">
            <h3>PORTFOLIO</h3>
            <ul>
                {portfolio.map((site, index)=> (
                    <li key={index} style={{backgroundImage: `url(${site.image})`}}>
                        <a href={site.link} target="_blank">
                        </a>
                    </li>
                )

                )}
            </ul>
        </section>
    )
}

export default Portfolio;

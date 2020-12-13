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
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607876454/portfolio-site/Screen_Shot_2020-12-13_at_11.20.02_AM_d625ut.png',
            link: 'https://pokedex-catchthemall.herokuapp.com/',
        },
        {
            title: 'Morning Sun Blog',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607876076/portfolio-site/Screen_Shot_2020-12-13_at_11.09.04_AM_dm9utz.png',
            link: 'http://morningsunblog.com/'
        },
        {
            title: 'Schoen Builders',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607875268/portfolio-site/Screen_Shot_2020-12-13_at_10.49.44_AM_pgbnwq.png',
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

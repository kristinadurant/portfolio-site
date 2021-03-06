import React from 'react';

const Portfolio = () => {

    const portfolio = [
        {
            title: 'CLN ALT',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607876074/portfolio-site/Screen_Shot_2020-12-13_at_11.12.51_AM_pnw5c2.png',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1608065877/portfolio-site/ezgif.com-gif-maker_2_dqvrvx.gif',
            link: 'https://clnalt.herokuapp.com/'
        },
        {
            title: 'Pokecode',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607970931/portfolio-site/Screen_Shot_2020-12-14_at_11.47.17_AM_echehu.png',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1608066283/portfolio-site/ezgif.com-gif-maker_3_zq7kkd.gif',
            link: 'https://pokedex-catchthemall.herokuapp.com/'
        },
        {
            title: 'Morning Sun Blog',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607901610/portfolio-site/Screen_Shot_2020-12-13_at_6.18.57_PM_ebdzeq.png',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1608066906/portfolio-site/ezgif.com-gif-maker_5_qbppk7.gif',
            link: 'http://morningsunblog.com/'
        },
        {
            title: 'Schoen Builders',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1607971148/portfolio-site/Screen_Shot_2020-12-14_at_1.38.50_PM_n7abrm.png',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1608066675/portfolio-site/ezgif.com-gif-maker_4_vbw2hm.gif',
            link: 'http://schoenbuilders.com/'
        },
        {
            title: 'Plush Paws Products',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1613493027/portfolio-site/Screen_Shot_2021-02-16_at_11.29.23_AM_eqcgku.png',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1613494472/portfolio-site/ezgif.com-gif-maker_1_u8tqhn.gif',
            link: 'https://plushpawsproducts.com/'
        },
        {
            title: 'Carronade Park Townhomes',
            image: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1613494751/portfolio-site/New_Project_ek8yr9.jpg',
            gif: 'https://res.cloudinary.com/dyk6u3np0/image/upload/v1613494970/portfolio-site/ezgif.com-gif-maker_sifyuk.gif',
            link: 'https://carronade-park.netlify.app/'
        },
    ]

    return (
        <section id="portfolio">
            <h2>PORTFOLIO</h2>
            <ul>
                {portfolio.map((site, index)=> (
                    <li key={index} style={{backgroundImage: `url(${site.image})`}}>
                        <div className="gif">
                            <img src={site.gif} alt={site.title}/>
                            <p>{site.title} <i class="fas fa-external-link-alt"></i></p>
                        </div>                       
                        <a href={site.link} target="_blank" rel="noreferrer">
                            <span className='hide'>{site.title}</span>
                        </a>
                    </li>
                )

                )}
            </ul>
        </section>
    )
}

export default Portfolio;

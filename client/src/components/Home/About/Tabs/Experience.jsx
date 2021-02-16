import React from 'react';

const Experience = () => {
    return (
        <div>
            <h3 className="title">EXPERIENCE</h3>
            <ul>
                <li>
                    <h4 className="subtitle">Frontend Web Developer</h4>
                    <p className="where">Freelance</p>
                    <p className="time">Nov, 2016 - Present</p>
                    <ul className="list-indented">
                        <li>Developed WordPress themes from scratch using HTML5, CSS3 
                            and JavaScript and customized existing WordPress themes to match client's specific designs.
                        </li>
                        <li>Offered support to long-term clients.</li>
                        <li>Helped team members with debugging.</li>   
                    </ul>
                </li>
                <li>
                    <h4 className="subtitle">Server/Maitre D</h4>
                    <p className="where">Quality Meats, Miami Beach, FL</p>
                    <p className="time">Sept, 2017 - March, 2020</p>
                    <ul  className="list-indented">
                        <li>Worked as a crew member or lead server on private banquets</li>
                        <li>Managed reservations on busy nights, overlooked the main dining room and kept 
                            track of special notes for regular guests.
                        </li>
                        <li>Used up-selling techiques when taking orders and making wine recommendations.</li>
                        <li>Maintained and managed sections for other servers.</li>   
                    </ul>
                </li>
                <li>
                    <h4 className="subtitle">Math Tutor</h4>
                    <p className="where">Self-employed, Subotica, Serbia</p>
                    <p className="time">Oct, 2014 - June, 2017</p>
                    <ul className="list-indented">
                        <li>Tutored Math and Accounting to students from Middle School to College levels.</li>
                        <li>Coached Middle School students for Math Competitions.</li>   
                    </ul>
                </li>                
            </ul>        
        </div>
    )
}

export default Experience;

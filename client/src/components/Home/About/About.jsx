import React, {useContext} from 'react';
import {TabsContext } from '../../../context/TabsContext';
import Info from './Tabs/Info';
import Experience from './Tabs/Experience';
import Education from './Tabs/Education';
import Skills from './Tabs/Skills';

const About = () => {
    const { tab, setTab } = useContext(TabsContext);

    const handleClick = (e) => {
        setTab(e.currentTarget.name);
        
    }

    return (
        <section id="about">
            <div className="inner">  
                <div id="more">
                    {tab==="info" && <Info />}
                    {tab==="experience" && <Experience />}
                    {tab==="education" && <Education />}
                    {tab==="skills" && <Skills />}
                </div>
                <div className='tabs'>
                    <div name="info">
                        <button name="info" className={tab==="info"? 'active': ''} onClick={handleClick}>
                            <h6 className="title">KRISTINA DURANT</h6>
                            <p>Full Stack Web Developer</p>
                        </button>
                    </div>
                    <div>
                        <button name="experience" className={tab==="experience"? 'active': ''} onClick={handleClick}>
                            <h6 className="title">EXPERIENCE</h6>
                            <ul>
                                <li>
                                    <h5 className="subtitle">Frontend Web Developer</h5>
                                    <p className="where">Freelance</p>
                                </li>
                                <li>
                                    <h5 className="subtitle">Server/Maitre D</h5>
                                    <p className="where">Quality Meats, Miami Beach, FL</p>
                                </li>
                                <li>
                                    <h5 className="subtitle">Math Tutor</h5>
                                    <p className="where">Self-employed, Subotica, Serbia</p>
                                </li>
                            </ul>
                        </button>
                    </div>
                    <div>
                        <button name='education' className={tab==="education"? 'active': ''} onClick={handleClick}>
                            <h6 className="title">EDUCATION</h6>
                            <ul>
                                <li>
                                    <h5 className="subtitle">Full Stack Web Developer</h5>
                                    <p className="where">Wyncode Academy, Miami, FL</p>
                                </li>
                                <li>
                                    <h5 className="subtitle">Master's in Applied Mathematics - <br/>Financial Mathematics</h5>
                                    <p className="where">University of Sciences, Novi Sad, Serbia</p>
                                </li>
                            </ul>
                        </button>                  
                    </div>
                    <div>
                        <button name='skills' className={tab==="skills"? 'active': ''} onClick={handleClick}>
                            <h6 className="title">SKILLS & TECHNOLOGIES</h6>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

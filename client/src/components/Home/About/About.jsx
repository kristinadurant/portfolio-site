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
            <span className='hide'><h2>About</h2></span>
            <div className="inner">  
                <div className='tabs'>
                    <div name="info">
                        <button name="info" className={tab==="info"? 'active': ''} onClick={handleClick}>
                            <p className="title">KRISTINA DURANT</p>
                            <p>Full Stack Web Developer</p>
                        </button>
                    </div>
                    <div>
                        <button name="experience" className={tab==="experience"? 'active': ''} onClick={handleClick}>
                            <p className="title">EXPERIENCE</p>
                            <ul>
                                <li>
                                    <p className="subtitle">Frontend Web Developer</p>
                                    <p className="where">Freelance</p>
                                </li>
                                <li>
                                    <p className="subtitle">Server/Maitre D</p>
                                    <p className="where">Quality Meats, Miami Beach, FL</p>
                                </li>
                                <li>
                                    <p className="subtitle">Math Tutor</p>
                                    <p className="where">Self-employed, Subotica, Serbia</p>
                                </li>
                            </ul>
                        </button>
                    </div>
                    <div>
                        <button name='education' className={tab==="education"? 'active': ''} onClick={handleClick}>
                            <p className="title">EDUCATION</p>
                            <ul>
                                <li>
                                    <p className="subtitle">Full Stack Web Developer</p>
                                    <p className="where">Wyncode Academy, Miami, FL</p>
                                </li>
                                <li>
                                    <p className="subtitle">Master's in Applied Mathematics - <br/>Financial Mathematics</p>
                                    <p className="where">University of Sciences, Novi Sad, Serbia</p>
                                </li>
                            </ul>
                        </button>                  
                    </div>
                    <div>
                        <button name='skills' className={tab==="skills"? 'active': ''} onClick={handleClick}>
                            <p className="title">SKILLS & TECH<span className="no-display">NOLOGIES</span></p>
                        </button>
                    </div>
                </div>
                <div id="more">
                    {tab==="info" && <Info />}
                    {tab==="experience" && <Experience />}
                    {tab==="education" && <Education />}
                    {tab==="skills" && <Skills />}
                </div>
            </div>
        </section>
    )
}

export default About;

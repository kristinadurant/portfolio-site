import React, {useContext} from 'react';
import {TabsContext } from '../../../context/TabsContext';
import Info from './Tabs/Info';
import Experience from './Tabs/Experience';
import Education from './Tabs/Education';
import Skills from './Tabs/Skills';

const About = () => {
    const { tab, setTab } = useContext(TabsContext);

    return (
        <section id="about">
            <div className="inner">  
                <div id="more">
                    {tab==="info" && <Info />}
                    {tab==="experience" && <Experience />}
                    {tab==="education" && <Education />}
                    {tab=="skills" && <Skills />}
                </div>
                <div className='tabs'>
                    <div>
                        <h6><button onClick={()=> setTab('info')}>KRISTINA DURANT</button></h6>
                        <p>Full Stack Web Developer</p>
                    </div>
                    <div>
                        <h6><button onClick={()=> setTab('experience')}>EXPERIENCE</button></h6>
                        <ul>
                            <li>
                                <h5 className="headline">Frontend Web Developer</h5>
                                <p className="where">Freelance</p>
                            </li>
                            <li>
                                <h5 className="headline">Server/Maitre D</h5>
                                <p className="where">Quality Meats, Miami Beach, FL</p>
                            </li>
                            <li>
                                <h5 className="headline">Math Tutor</h5>
                                <p className="where">Self-employed, Subotica, Serbia</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6><button onClick={()=> setTab('education')}>EDUCATION</button></h6>
                        <ul>
                            <li>
                                <h5 className="headline">Full Stack Web Developer</h5>
                                <p className="where">Wyncode Academy, Miami, FL</p>
                            </li>
                            <li>
                                <h5 className="headline">Master's in Applied Mathematics - <br/>Financial Mathematics</h5>
                                <p className="where">University of Sciences, Novi Sad, Serbia</p>
                            </li>
                            <li>
                                <h5 className="headline">Bachelor's in Applied Mathematics - <br/>Financial Mathematics</h5>
                                <p className="where">University of Sciences, Novi Sad, Serbia</p>
                            </li>
                        </ul>                   
                    </div>
                    <div>
                        <h6><button onClick={()=> setTab('skills')}>SKILLS & TECHNOLOGIES</button></h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

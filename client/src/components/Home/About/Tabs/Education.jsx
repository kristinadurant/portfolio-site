import React from 'react';

const Education = () => {
    return (
        <div>
            <p className="title">EDUCATION</p>
            <ul>
                <li>
                    <h2 className="subtitle">Full Stack Web Developer</h2>
                    <p className="where">Wyncode Academy, Miami Beach, FL</p>
                    <p className="time">Sept, 2020 - Dec, 2020</p>
                    <ul className="list-indented">
                        <li>Acquired a robust knowledge base working with HTML5, CSS3, 
                            JavaScript, React, Node.js, Express, MongoDB, Mongoose, Git, GitHub, debugging and data modeling
                        </li>
                        <li>Led and managed midterm and final project teams by implementing Agile Methodology</li>   
                    </ul>
                </li>
                <li>
                    <h2 className="subtitle">Master's in Applied Mathematics - <br/>Financial Mathematics</h2>
                    <p className="where">University of Sciences, Novi Sad, Serbia</p>
                    <p className="time">Oct, 2012 - Sept, 2015</p>
                    <ul className="list-indented">
                        <li>GPA: 9.71/10.0</li>
                        <li>Final Thesis: Survival Analysis with Applications in Health Care Insurance</li>
                        <li>Courses: Econometrics, Financial Mathematics
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="subtitle">Bachelor's in Applied Mathematics - <br/>Financial Mathematics</h2>
                    <p className="where">University of Sciences, Novi Sad, Serbia</p>
                    <p className="time">Oct, 2009 - Sept, 2012</p>
                    <ul className="list-indented">
                        <li>GPA: 9.58/10.0</li>
                        <li>Awarded with Dositeja Scholarship for 1000 best students in Serbia 2011/2012</li>
                        <li>Courses: Accounting, MySQL Databases, Statistics</li>   
                    </ul>
                </li>                
            </ul>            
        </div>
    )
}

export default Education;

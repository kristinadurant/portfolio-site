import React from 'react';
import pdf from '../../assets/pdf/Kristina_Durant_Resume.pdf';

const Contact = () => {
    return (
        <section id="contact">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>
                <i class="fas fa-envelope"></i> kristinadurant.p@gmail.com
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kristinadurant/"  target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin-in"></i> linkedin.com/in/kristinadurant
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kristinadurant/" target="_blank" rel="noreferrer">
                        <i class="fab fa-github"></i> github.com/kristinadurant
                    </a>
                </li>
                <li className="pdf">
                    <a href={pdf} download><i class="fas fa-file-pdf"></i> download resume</a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;

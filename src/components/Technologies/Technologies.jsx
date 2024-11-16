import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faDjango, faPhp, faLaravel, faReact, faFlutter } from '@fortawesome/free-brands-svg-icons'
library.add(faPython, faDjango, faPhp, faLaravel, faReact, faFlutter)

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Conhecimentos em Tecnologias Como</h2>
      <div className="technologies__slider">
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faPython} className="technologies__icon" />
          <span className="technologies__name">Python</span>
        </div>
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faDjango} className="technologies__icon" />
          <span className="technologies__name">Django</span>
        </div>
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faPhp} className="technologies__icon" />
          <span className="technologies__name">PHP</span>
        </div>
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faLaravel} className="technologies__icon" />
          <span className="technologies__name">Laravel</span>
        </div>
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faReact} className="technologies__icon" />
          <span className="technologies__name">React.js</span>
        </div>
        <div className="technologies__slide">
          <FontAwesomeIcon icon={faFlutter} className="technologies__icon" />
          <span className="technologies__name">Flutter</span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

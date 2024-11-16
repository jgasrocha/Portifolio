import React from 'react';
import './style.css';
import joaoGabriel from '../../assets/joaogabriel.jpg'; // Ajuste o caminho conforme necessário

const AboutMe = () => {
    return (
        <section className="about-me" id="sobre">
            <div className="about-me__content">
                <div className="about-me__text">
                    <h2>Sobre Mim</h2>
                    <p>
                        Sou um desenvolvedor apaixonado por criar soluções inovadoras e funcionais. 
                        Com experiência em várias tecnologias, estou sempre buscando aprender e crescer.
                    </p>
                    <a href="seu-cv.pdf" className="btn" download>Baixar CV</a>
                </div>
                <div className="about-me__photo-container">
                    <img src={joaoGabriel} alt="Minha Foto" className="about-me__photo" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

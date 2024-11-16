import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Meu Portifolio</h1>
            </div>
            <nav className='navigation'>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
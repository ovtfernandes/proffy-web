import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="placeholder" alt="Proffy"/>
                <div>
                    <strong>Vitor Fernandes</strong>
                    <span>Computação</span>
                </div>
            </header>
            
            <p>
                Entusiasta por desenvolvimento de games
                <br /><br />
                Já desenvolveu alguns jogos com tecnologias Web, utilizando de um framework criado por ele mesmo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

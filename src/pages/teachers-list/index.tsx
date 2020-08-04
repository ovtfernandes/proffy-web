import React from 'react';

import PageHeader from '../../components/page-header';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeachersList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    );
}

export default TeachersList;

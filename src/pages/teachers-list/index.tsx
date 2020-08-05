import React from 'react';

import Input from '../../components/input';
import PageHeader from '../../components/page-header';
import TeacherItem from '../../components/teacher-item';

import './styles.css';

function TeachersList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matérias" />

                    <Input name="week_day" label="Dia da semana" />

                    <Input name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeachersList;

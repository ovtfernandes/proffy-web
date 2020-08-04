import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/landing';
import TeachersList from './pages/teachers-list';
import TeacherForm from './pages/teacher-form';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/study" component={TeachersList} />
            <Route exact path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;

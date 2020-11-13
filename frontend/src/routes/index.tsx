import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

import GlobalStyle from '../styles/global';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exactly path="/repository" component={Repository} />
    </Switch>
    <GlobalStyle />
  </>
);

export default Routes;

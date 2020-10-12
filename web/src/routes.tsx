import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphMap from './pages/OrphMap';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphMap} />
    </BrowserRouter>
  );
}

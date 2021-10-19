import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom';

//Importing Pages ~ Shae
import AllDrugTerms from './getDrugTerms';
import getRxcuiId from './getRxcui';
import getDrugInteraction from './getDrugInteraction';
import HomePage from './HomePage';
import getInteractionPair from './getInteractionPair';
import drug3dtest from './drug3dtest';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {HomePage} />
      <Route path = "/AllDrugTerms" component={AllDrugTerms} />
      <Route path = "/getRxcuiId" component={getRxcuiId} />
      <Route path = "/getDrugInteraction" component={getDrugInteraction} />
      <Route path = "/HomePage" component={HomePage} />
      <Route path = "/getInteractionPair" component={getInteractionPair} />
      <Route path = "/drug3dtest" component={drug3dtest} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

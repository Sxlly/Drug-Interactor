import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom';

//scroll bar import
import 'simplebar/src/simplebar.css';

//Importing Pages ~ Shae
import getRxcuiId from './getRxcui';
import getDrugInteraction from './getDrugInteraction';
import HomePage from './HomePage';
import InteractionPairPage from './getInteractionPair';
import drug3dtest from './drug3dtest';
import NewHomePage from './newHomePage';
import Dashboard from './Dashboard';
import GetDrugPrice from './getDrugPricePage';
import AllDrugTerms from './getDrugTerms';
import AllDrugClasses from './getDrugClasses';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Dashboard} />
      <Route path = "/AllDrugTerms" component={AllDrugTerms} />
      <Route path = "/getRxcuiId" component={getRxcuiId} />
      <Route path = "/getDrugInteraction" component={getDrugInteraction} />
      <Route path = "/HomePage" component={HomePage} />
      <Route path = "/getInteractionPair" component={InteractionPairPage} />
      <Route path = "/drug3dtest" component={drug3dtest} />
      <Route path = "/newHomePage" component={NewHomePage} />
      <Route path = "/Dashboard" component={Dashboard} />
      <Route path = "/getDrugPrice" component={GetDrugPrice} />
      <Route path = "/AllDrugClasses" component={AllDrugClasses} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

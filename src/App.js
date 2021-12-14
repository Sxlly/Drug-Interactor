import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@mui/styles';
//importing pages
import InteractionPairPage from "./getInteractionPair";
import NewHomePage from "./newHomePage";






const App = () => (

  <ThemeProvider theme={theme}>
    <div className="App">

    </div>
  </ThemeProvider>
)

export default App;

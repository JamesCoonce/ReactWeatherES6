import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Main from './components/Main';
import Weather from './components/Weather';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
        </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <Route path="/examples" component={Examples}/>
            <IndexRoute component={Weather} />
        </Route>
  </Router>,
  document.getElementById('root')
);

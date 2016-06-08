import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Main from './components/Main';
import Docs from './components/Docs';


require('./style.scss');

const routes = <Route component={App}>
  <Route path="/docs" component={Docs} />
  <Route path="/" component={Main} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);

console.log('hello world');

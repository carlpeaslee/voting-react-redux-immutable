import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

let data = require('./data.json');

const docs = data.docs;
const users = data.users;


ReactDOM.render(
  <Main docs={docs} users={users} />,
  document.getElementById('app')
);

console.log('hello world');

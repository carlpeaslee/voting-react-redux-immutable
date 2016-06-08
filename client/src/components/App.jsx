import React from 'react';
import {List, Map} from 'immutable';

const data = require('../data.json');

const users = List(data.users);
const currentUser = Map(data.currentUser);
const docs = List(data.docs);

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children,{
      docs: docs,
      users: users,
      currentUser: currentUser
    });
  }
});

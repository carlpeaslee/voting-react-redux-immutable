import React from 'react';
import {List, Map} from 'immutable';

const data = require('../data.json');

const users = List.of(data.users);
const currentUser = Map(data.currentUser);

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children,{
      users: users,
      currentUser: currentUser
    });
  }
});

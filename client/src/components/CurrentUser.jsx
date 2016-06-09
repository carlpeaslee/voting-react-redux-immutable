import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';


export default React.createClass({
  mixins: [PureRenderMixin],
  getCurrentUser: function() {
    if (this.props.currentUser && this.props.currentUser.has('user_id')) {
      return this.props.currentUser;
    }
    return Map();
  },
  render: function() {
    return <div className="CurrentUser">
        <h1>Current User is {this.getCurrentUser().get("name")}</h1>
    </div>
  }
});

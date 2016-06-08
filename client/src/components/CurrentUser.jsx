import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
  mixins: [PureRenderMixin],
  getCurrentUser: function() {
    if (this.props.currentUser.has("user_id")) {
      return this.props.currentUser;
    }
    console.log('no one is logged in');
    return -1;
  },
  render: function() {
    return <div className="CurrentUser">
        <h1>Current User is {this.getCurrentUser().get("name")}</h1>
    </div>
  }
});

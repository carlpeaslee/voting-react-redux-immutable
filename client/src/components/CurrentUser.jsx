import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
  mixins: [PureRenderMixin],
  getCurrentUser: function() {
    return this.props.currentUser || [];
  },
  render: function() {
    return <div className="CurrentUser">
      <h1>Current User is {this.getCurrentUser().name}</h1>
    </div>
  }
});

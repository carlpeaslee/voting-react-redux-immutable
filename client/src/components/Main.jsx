import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CurrentUser from './CurrentUser';
import AllUsers from './AllUsers';


export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <CurrentUser currentUser={this.props.currentUser}>
      </CurrentUser>
      <AllUsers users={this.props.users}>
      </AllUsers>
    </div>;
  }
});

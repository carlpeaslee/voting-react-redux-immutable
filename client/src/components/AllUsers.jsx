import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
  mixins: [PureRenderMixin],
  getUsers: function() {
    return this.props.users || [];
  },
  render: function() {
    return <div className="Users">
      {this.getUsers().map(user =>
        <div key={user.user_id}>
          <h1>{user.name}</h1>
          <button
            key={user.user_id}
            onClick={() => this.props.setCurrentUser(user)}
          >Login as {user.name}</button>
        </div>
      )}
    </div>;
  }
});

import React from 'react';

export default React.createClass({
  getUsers: function() {
    return this.props.users || [];
  },
  getDocs: function() {
    return this.props.docs || [];
  },
  render: function() {
    return <div className="Main">
      {this.getUsers().map(user =>
        <div key={user.user_id}>
          <h1>{user.name}</h1>
        </div>
      )}
    </div>;
  }
});

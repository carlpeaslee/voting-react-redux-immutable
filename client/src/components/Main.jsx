import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import CurrentUser from './CurrentUser';
import AllUsers from './AllUsers';

import * as actionCreators from '../action_creators';


export const Main = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <CurrentUser currentUser={this.props.currentUser}></CurrentUser>
      <AllUsers {...this.props}></AllUsers>
    </div>;
  }
});

function mapStateToProps(state) {
  console.log("mapStateToProps from Main");
  return {
    users: state.getIn(['data', 'users']),
    currentUser: state.getIn(['data', 'currentUser']),
  };
}

export const MainContainer = connect(
  mapStateToProps,
  actionCreators
)(Main);

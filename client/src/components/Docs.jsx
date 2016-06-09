import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Docs = React.createClass({
  mixins: [PureRenderMixin],
  getDocs: function() {
    return this.props.docs || [];
  },
  render: function() {
    return <div className="docs">
      {this.getDocs().map(doc =>
        <div key={doc.get('doc_id')} className="entry">
          <h2>{doc.get('title')}</h2>
          <p>{doc.get('body')}</p>
        </div>
      )}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    docs: state.getIn(['data', 'docs'])
  }
}

export const DocsContainer = connect(mapStateToProps)(Docs);

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getDocs: function() {
    return this.props.docs || [];
  },
  render: function() {
    return <div className="docs">
      {this.getDocs().map(doc =>
        <div key={doc.doc_id} className="entry">
          <h2>{doc.title}</h2>
          <p>{doc.body}</p>
        </div>
      )}
    </div>;
  }
});

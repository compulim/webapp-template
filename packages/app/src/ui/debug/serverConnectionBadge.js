import { connect } from 'react-redux';
import React from 'react';

export default connect(
  state => ({ connected: state.server.connected })
)(props =>
  <div>
    { props.connected ? 'Connected' : 'Not connected' }
  </div>
)

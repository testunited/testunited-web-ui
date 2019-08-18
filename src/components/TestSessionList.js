import React from 'react';
import TestSession from './TestSession';
import PropTypes from 'prop-types';

class TestSessionList extends React.Component {
  render(){
    return this.props.testSessions.map((testSession) => (
        <TestSession key={testSession.id} item={testSession} />
    ));
  }
}



export default TestSessionList;

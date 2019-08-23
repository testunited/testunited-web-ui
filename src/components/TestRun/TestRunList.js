import React from 'react';
import TestRunListItem from './TestRunListItem';
import PropTypes from 'prop-types';

class TestRunList extends React.Component {
  render(){
    return this.props.testRuns.map((testRun) => (
        <TestRunListItem key={testRun.id} item={testRun} />
    ));
  }
}



export default TestRunList;

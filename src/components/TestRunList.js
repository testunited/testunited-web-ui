import React from 'react';
import TestRun from './TestRun';
import PropTypes from 'prop-types';

class TestRunList extends React.Component {
  render(){
    return this.props.testRuns.map((testRun) => (
        <TestRun key={testRun.id} item={testRun} />
    ));
  }
}



export default TestRunList;

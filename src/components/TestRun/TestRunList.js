import React from 'react';
import TestRunListItem from './TestRunListItem';
import PropTypes from 'prop-types';
import AppContext from '../../AppContext'

class TestRunList extends React.Component {
  static contextType = AppContext;

  render(){
    return this.props.testRuns.map((testRun) => (
        <TestRunListItem key={testRun.id} item={testRun} />
    ));
  }
}



export default TestRunList;

import React from 'react';
import TestCase from './TestCase';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../Config';

class TestCaseList extends React.Component {

  baseUrl = new Config().getApiHost();
  state = {
    testCases: []
  }
  
  componentDidMount(){
    axios.get(this.baseUrl+'/testcases')
     .then(res => this.setState({testCases: res.data}))
  }
  
  render(){
    return this.state.testCases.map((testCase) => (
        <TestCase key={testCase.id} item={testCase} />
    ));
  }
}



export default TestCaseList;

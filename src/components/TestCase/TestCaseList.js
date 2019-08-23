import React from 'react';
import TestCaseListItem from './TestCaseListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';

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
    return (<div><div><h2>Test Cases</h2></div>
    <div class="divTable">
    <div class="divTableHeading">
        <div class="divTableHead">Name</div>
        <div class="divTableHead">Source</div>
      </div>    
    <div class="divTableBody"> {
      this.state.testCases.map((testCase) => (
        <TestCaseListItem key={testCase.id} item={testCase} />
    ))} 
    </div></div>
    </div>);
  }
}



export default TestCaseList;

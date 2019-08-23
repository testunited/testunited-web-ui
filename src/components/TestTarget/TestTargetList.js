import React from 'react';
import TestTargetListItem from './TestTargetListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';

class TestTargetList extends React.Component {

  baseUrl = new Config().getApiHost();
  state = {
    testTargets: []
  }
  
  componentDidMount(){
    axios.get(this.baseUrl + '/testtargets')
     .then(res => this.setState({testTargets: res.data}))
  }
  
  render(){
    return (<div><div><h2>Test Targets</h2></div>
    <div class="divTable">
      <div class="divTableHeading">
        <div class="divTableHead">Microservice</div>
        <div class="divTableHead">HTTP Method</div>
        <div class="divTableHead">Path</div>
      </div>
      <div class="divTableBody"> {
      this.state.testTargets.map((testTarget) => (
        <TestTargetListItem key={testTarget.id} item={testTarget} />
    ))} 
    </div></div>
    </div>);
  }
}



export default TestTargetList;

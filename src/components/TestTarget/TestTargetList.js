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
    <div className="divTable">
      <div className="divTableHeading">
        <div className="divTableHead">Component</div>
        <div className="divTableHead">Function</div>
      </div>
      <div className="divTableBody"> {
      this.state.testTargets.map((testTarget) => (
        <TestTargetListItem key={testTarget.id} item={testTarget} />
    ))} 
    </div></div>
    </div>);
  }
}



export default TestTargetList;

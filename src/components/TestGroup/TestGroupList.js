import React from 'react';
import TestGroupListItem from './TestGroupListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';
import AppContext from '../../AppContext'

class TestGroupList extends React.Component {

  static contextType = AppContext;

  baseUrl = new Config().getApiHost();
  state = {
    testGroups: []
  }
  
  componentDidMount(){
    axios.get(this.baseUrl + '/applications/' + this.context.application.id + '/testgroups')
     .then(res => this.setState({testGroups: res.data}))
  }
  
  render(){
    return (<div><div><h2>Test Groups</h2></div>
    <div className="divTable">
      <div className="divTableHeading">
        <div className="divTableHead">Name</div>
      </div>
      <div className="divTableBody"> {
      this.state.testGroups.map((testGroup) => (
        <TestGroupListItem key={testGroup.id} item={testGroup} />
    ))} 
    </div></div>
    </div>);
  }
}



export default TestGroupList;

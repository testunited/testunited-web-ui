import React from 'react';
import TestSessionListItem from './TestSessionListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';

class TestSessionList extends React.Component {

  baseUrl = new Config().getApiHost();

  state = {
    testSessions: []
  }
  
  componentDidMount(){
    axios.get(this.baseUrl+'/testsessions')
     .then(res => this.setState({testSessions: res.data}))
  }
  
  render(){
    return (<div><div><h2>Test Sessions</h2></div>
      <div class="divTable">
        <div class="divTableHeading">
          <div class="divTableHead">Name</div>
        </div>{
        this.state.testSessions.map((testSession) => (
        <TestSessionListItem key={testSession.id} item={testSession} />
        ))}
      </div> 
    </div>
    );
  }
}



export default TestSessionList;

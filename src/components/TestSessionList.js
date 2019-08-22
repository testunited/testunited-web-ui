import React from 'react';
import TestSession from './TestSession';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../Config';

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
    return this.state.testSessions.map((testSession) => (
        <TestSession key={testSession.id} item={testSession} />
    ));
  }
}



export default TestSessionList;

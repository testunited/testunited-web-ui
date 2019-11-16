import React, { useContext } from 'react';
import TestSessionListItem from './TestSessionListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';
import AppContext from '../../AppContext'
class TestSessionList extends React.Component {

  baseUrl = new Config().getApiHost();

  static contextType = AppContext;

  state = {
    testSessions: []
  }


  componentDidMount() {
    axios.get(this.baseUrl + '/applications/' + this.context.application.id + '/testsessions')
      .then(res => this.setState({ testSessions: res.data }))
  }

  render() {
    return (
        <div><div><h2>Test Sessions for {this.context.application.name}</h2></div>
          <div className="divTable">
            <div className="divTableHeading">
              <div className="divTableHead">Name</div>
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

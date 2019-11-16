import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TestRunList from '../TestRun/TestRunList';
import Config from '../../Config';

export class ComponentInfo extends Component {
  baseUrl = new Config().getApiHost();

  state = {
    testSession: {},
    testRuns: []
  }

  componentDidMount() {
    axios.get(this.baseUrl + '/testsessions/' + this.props.match.params.testSessionId)
      .then(res => this.setState({ testSession: res.data }))
    axios.get(this.baseUrl + '/testsessions/' + this.props.match.params.testSessionId + '/testruns')
      .then(res => this.setState({ testRuns: res.data }))
  }

  render() {
    const { id, name, result } = this.state.testSession;
    return (
      <div>
        <div><h2>Test Session Info</h2> </div>
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Id: </div>
              <div className="divTableCell">{id}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Name: </div>
              <div className="divTableCell">{name}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Overall Result: </div>
              <div className="divTableCell">{result ? "Successful" : "Failed"}</div>
            </div>
          </div>
        </div>
        <hr />
        <div><h2>Test Runs</h2> </div>
        <div className="divTable">
          <div className="divTableHeading">
            <div className="divTableHead">Test Case Name</div>
            <div className="divTableHead">Execution Time</div>
            <div className="divTableHead">Result</div>
          </div>
          <div className="divTableBody">
            <TestRunList testRuns={this.state.testRuns} />
          </div>
        </div>
      </div>
    )
  }
}

export default TestSessionInfo;

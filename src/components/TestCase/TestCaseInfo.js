import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import TestRunList from '../TestRun/TestRunList';
import Config from '../../Config';

export class TestCaseInfo extends Component {
  baseUrl = new Config().getApiHost();
  state = {
    testCase: {},
    testTargets: [],
    testGroups: [],
    redirect: false
  }
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/testcases' />
    }
  }
  componentDidMount() {
    axios.get(this.baseUrl + '/testcases/' + this.props.match.params.testCaseId)
      .then(res => this.setState({ testCase: res.data }));
    axios.get(this.baseUrl + '/testtargets')
      .then(res => this.setState({ testTargets: res.data }));
    axios.get(this.baseUrl + '/testgroups')
      .then(res => this.setState({ testGroups: res.data }));
  }

  handleSubmit(event) {
    axios.post(this.baseUrl + '/testcases', this.state.testCase);
    event.preventDefault();
    this.setRedirect();

  }

  handleChange(event) {
    var testCase = { ...this.state.testCase };
    testCase.name = event.target.value;
    this.setState({ testCase });
  }

  handleTargetChange(event) {
    var testCase = { ...this.state.testCase };
    testCase.testTarget = { id: event.target.value };
    this.setState({ testCase });
  }

  handleGroupChange(event) {
    var testCase = { ...this.state.testCase };
    testCase.testGroup = { id: event.target.value };
    this.setState({ testCase });
  }

  render() {
    const labelStyle = {
      fontWeight: 'bold'
    };
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderRedirect()}
        <div className="divTable">
          <div className="divTableRow">
            <div className="divTableCell"><span style={labelStyle}>Id:&nbsp;</span></div>
            <div className="divTableCell">{this.state.testCase.id}</div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell"><span style={labelStyle}>Test Source Id:&nbsp;</span></div>
            <div className="divTableCell">{this.state.testCase.testSourceId}</div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell"><span style={labelStyle}>Name:&nbsp;</span></div>
            <div className="divTableCell"><input type="text" value={this.state.testCase.name} onChange={this.handleChange}></input></div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell"><span style={labelStyle}>Test Target:&nbsp;</span></div>
            <div className="divTableCell">
              <select name="testTarget" onChange={this.handleTargetChange} value={this.state.testCase.testTarget != null ? this.state.testCase.testTarget.id : null}>
                <option> ----- </option>
                {this.state.testTargets.map(testTarget => { return (<option value={testTarget.id}>{testTarget.name}</option>) })}
              </select>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell"><span style={labelStyle}>Test Group:&nbsp;</span></div>
            <div className="divTableCell">
              <select name="testGroup" onChange={this.handleGroupChange} value={this.state.testCase.testGroup != null ? this.state.testCase.testGroup.id : null}>
                <option> ----- </option>
                {this.state.testGroups.map(testGroup => { return (<option value={testGroup.id}>{testGroup.name}</option>) })}
              </select>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell"></div>
            <div className="divTableCell"><input type="submit" name="submit" value="Save" /></div>
          </div>
        </div>
      </form>
    )
  }
}

export default TestCaseInfo;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TestRunList from '../TestRun/TestRunList';
import Config from '../../Config';

export class TestSessionInfo extends Component {
    baseUrl = new Config().getApiHost();

    state = {
        testSession: {},
        testRuns: []
      }
    
      componentDidMount(){
        axios.get(this.baseUrl + '/testsessions/'+this.props.match.params.testSessionId)
         .then(res => this.setState({testSession: res.data}))
        axios.get(this.baseUrl + '/testsessions/'+this.props.match.params.testSessionId + '/testruns')
         .then(res => this.setState({testRuns: res.data}))
      }

    
    render() {
        const {id, name, result} = this.state.testSession;
        return (
            <div>
                <div><h2>Test Session Info</h2> </div>
                <div class="divTable">
                    <div class="divTableBody">
                        <div class="divTableRow">
                            <div class="divTableCell">Id: </div>
                            <div class="divTableCell">{id}</div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell">Name: </div>
                            <div class="divTableCell">{name}</div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell">Overall Result: </div>
                            <div class="divTableCell">{result? "Successful": "Failed"}</div>
                        </div>
                    </div>
                </div>

                <hr/>
                <div><h2>Test Runs</h2> </div>
                <div class="divTable">
                        <div class="divTableHeading">
                            <div class="divTableHead">Test Case Name</div>
                            <div class="divTableHead">Execution Time</div>
                            <div class="divTableHead">Result</div>

                        </div>
                        <div class="divTableBody">
                        <TestRunList testRuns={this.state.testRuns}/>
                </div></div>
            </div>
        )
    }
}


export default TestSessionInfo

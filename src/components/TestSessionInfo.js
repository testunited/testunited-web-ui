import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TestRunList from './TestRunList';

export class TestSessionInfo extends Component {
    baseUrl = "http://web-api.int.testunited.minikube.local"

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
                Id: {id} <br/>
                Name: {name} <br/>
                Result: {result? "true": "false"} <br/>
                <div style={{textAlign:"left"}}>
                <TestRunList testRuns={this.state.testRuns}/>
                </div>
            </div>

        )
    }
}


export default TestSessionInfo

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';

export class TestRunInfo extends Component {
    baseUrl = new Config().getApiHost();

    state = {
        testRun: undefined
      }
    
    componentDidMount(){
    axios.get(this.baseUrl+'/testruns/'+this.props.match.params.testRunId)
        .then(res => this.setState({testRun: res.data}))
    }


    render() {
        if(this.state.testRun === undefined)
            return (<div>loading...</div>);
        
        const {id, timeStamp, result, testCase} = this.state.testRun;

        return (
            <div>
                Id: {id} <br/>
                Time: {timeStamp}<br/>
                Test Case: {testCase !== undefined? testCase.name:""}<br/>
                Result: {result? "true": "false"} <br/>
            </div>

        );
    }
}


export default TestRunInfo

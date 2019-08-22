import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TestRunList from './TestRunList';
import Config from '../Config';

export class TestCaseInfo extends Component {
    baseUrl = new Config().getApiHost();
    state = {
        testCase: {},
        testTargets:[]
      }
      constructor(props) {
        super(props);
        //this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleTargetChange = this.handleTargetChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    componentDidMount(){
        axios.get(this.baseUrl + '/testcases/'+this.props.match.params.testCaseId)
         .then(res => this.setState({testCase:res.data}));
        axios.get(this.baseUrl + '/testtargets')
         .then(res => this.setState({testTargets:res.data}));
         //.then(res => console.log(res.data));
    }

    handleSubmit(event) {
        axios.post(this.baseUrl + '/testcases', this.state.testCase);
        event.preventDefault();
    }
    
    handleChange(event){
        var testCase = {...this.state.testCase};
        testCase.name = event.target.value;
        this.setState({ testCase});
    }

    handleTargetChange(event){
        var testCase = {...this.state.testCase};
        testCase.testTarget = { id: event.target.value};
        this.setState({ testCase});
    }
    render() {
        //const testCase = this.state.testCase;
        const labelStyle = {
            fontWeight:'bold'
        };
        console.log(this.state.testTargets)
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{textAlign:'left'}}>
                    <span style={labelStyle}>Id:&nbsp;</span> {this.state.testCase.id} <br/>
                    <span style={labelStyle}>Test Source Id:&nbsp;</span> {this.state.testCase.testSourceId} <br/>
                    <span style={labelStyle}>Name:&nbsp;</span> <input type="text" value={this.state.testCase.name} onChange={this.handleChange}></input> <br/>
                    <select name="testTarget" onChange={this.handleTargetChange} value={this.state.testCase.testTarget != null ? this.state.testCase.testTarget.id:null}>
                        <option> ----- </option>
                        {this.state.testTargets.map( testTarget => { return (<option value={testTarget.id}>{testTarget.microservice}</option>)})}
                    </select>
                    <input type="submit" name="submit" value="Save"/>
                </div>
            </form>
        )
    }
}


export default TestCaseInfo

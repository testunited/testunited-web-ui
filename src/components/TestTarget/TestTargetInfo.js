import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Config from '../../Config';

export class TestTargetInfo extends Component {
    baseUrl = new Config().getApiHost();
    state = {
        testTarget: {}
      }
      constructor(props) {
        super(props);
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleTargetChange = this.handleTargetChange.bind(this);
        // this.handleGroupChange = this.handleGroupChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    componentDidMount(){
        axios.get(this.baseUrl + '/testtargets/'+this.props.match.params.testTargetId)
         .then(res => this.setState({testTarget:res.data}));
    }

    // handleSubmit(event) {
    //     axios.post(this.baseUrl + '/testcases', this.state.testCase);
    //     event.preventDefault();
    // }
    
    // handleChange(event){
    //     var testCase = {...this.state.testCase};
    //     testCase.name = event.target.value;
    //     this.setState({ testCase});
    // }

    // handleTargetChange(event){
    //     var testCase = {...this.state.testCase};
    //     testCase.testTarget = { id: event.target.value};
    //     this.setState({ testCase});
    // }

    // handleGroupChange(event){
    //     var testCase = {...this.state.testCase};
    //     testCase.testGroup = { id: event.target.value};
    //     this.setState({ testCase});
    // }

    render() {
        const labelStyle = {
            fontWeight:'bold'
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{textAlign:'left'}}>
                    <span style={labelStyle}>Id:&nbsp;</span> {this.state.testTarget.id} <br/>
                    <span style={labelStyle}>Function:&nbsp;</span> {this.state.testTarget.name} <br/>

                </div>
            </form>
        )
    }
}

export default TestTargetInfo

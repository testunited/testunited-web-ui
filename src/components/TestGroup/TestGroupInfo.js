import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Config from '../../Config';

export class TestGroupInfo extends Component {
    baseUrl = new Config().getApiHost();
    state = {
        testGroup: {}
      }
      constructor(props) {
        super(props);
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleTargetChange = this.handleTargetChange.bind(this);
        // this.handleGroupChange = this.handleGroupChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    componentDidMount(){
        axios.get(this.baseUrl + '/testgroups/'+this.props.match.params.testGroupId)
         .then(res => this.setState({testGroup:res.data}));
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
                    <span style={labelStyle}>Id:&nbsp;</span> {this.state.testGroup.id} <br/>
                    <span style={labelStyle}>Name:&nbsp;</span> {this.state.testGroup.name} <br/>

                </div>
            </form>
        )
    }
}

export default TestGroupInfo

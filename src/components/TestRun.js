import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestRun extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.item.completed ? 'line-through' :  'none'
        }
    }


    render() {
        const {id, timeStamp, result, testCase} = this.props.item;
        const link = "/testruns/" + id;
        return (
            <div style={this.getStyle()}>
                <p>
                    <Link to={link}>{testCase.name}</Link> : { result? "passed": "failed"}
                </p>
            </div>
        )
    }
}


export default TestRun

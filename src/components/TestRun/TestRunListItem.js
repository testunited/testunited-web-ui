import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestRunListItem extends Component {

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
                        <div class="divTableRow">
                        <div class="divTableCell"><Link to={link}>{testCase.name}</Link></div>
                        <div class="divTableCell">{new Intl.DateTimeFormat('en-GB', { 
    year: 'numeric', 
    month: 'long', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}).format(new Date(timeStamp))}</div>
                        
                        <div class="divTableCell">{result? "passed": "failed"}</div>
                        </div>

        )
    }
}


export default TestRunListItem

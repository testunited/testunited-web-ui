import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestCaseListItem extends Component {
    render() {
        const {id, name,testSourceId} = this.props.item;
        const link = "/testcases/" + id;
        return (
            <div class="divTableRow">
            <div class="divTableCell"><Link to={link}>{name}</Link></div>
            <div class="divTableCell">{testSourceId}</div>
            </div>
        )
    }
}


export default TestCaseListItem

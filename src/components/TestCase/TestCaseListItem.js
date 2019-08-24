import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestCaseListItem extends Component {
    render() {
        const {id, name,testSourceId} = this.props.item;
        const link = "/testcases/" + id;
        return (
            <div className="divTableRow">
            <div className="divTableCell"><Link to={link}>{name}</Link></div>
            <div className="divTableCell">{testSourceId}</div>
            </div>
        )
    }
}


export default TestCaseListItem

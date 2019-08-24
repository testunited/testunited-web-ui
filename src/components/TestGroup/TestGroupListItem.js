import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestGroupListItem extends Component {
    render() {
        const testGroup = this.props.item;
        const link = "/testgroups/" + testGroup.id;
        return (
            <div className="divTableRow">
            <div className="divTableCell"><Link to={link}>{testGroup.name}</Link></div>
            </div>
        )
    }
}


export default TestGroupListItem

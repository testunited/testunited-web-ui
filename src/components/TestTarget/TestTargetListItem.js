import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestTargetListItem extends Component {
    render() {
        const testTarget = this.props.item;
        const link = "/testtargets/" + testTarget.id;
        return (
            <div className="divTableRow">
            <div className="divTableCell"><Link to={link}>{testTarget.microservice}</Link></div>
            <div className="divTableCell"><Link to={link}>{testTarget.method}</Link></div>
            <div className="divTableCell"><Link to={link}>{testTarget.path}</Link></div>
            </div>
        )
    }
}


export default TestTargetListItem

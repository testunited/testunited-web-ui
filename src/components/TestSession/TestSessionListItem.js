import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestSessionListItem extends Component {

    render() {
        const {id, name, result} = this.props.item;
        const link = "/testsessions/" + id;
        return (
            <div className="divTableRow">
            <div className="divTableCell"><Link to={link}>{name}</Link></div>
            </div>
        )
    }
}


export default TestSessionListItem

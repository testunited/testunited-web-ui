import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class TestSession extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.item.completed ? 'line-through' :  'none'
        }
    }


    render() {
        const {id, name, result} = this.props.item;
        const link = "/testsessions/" + id;
        return (
            <div style={this.getStyle()}>
                <p>
                    <Link to={link}>{name}</Link>
                </p>
            </div>
        )
    }
}


export default TestSession

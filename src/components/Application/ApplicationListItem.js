import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext'

export class ApplicationListItem extends Component {

  linkStyle = {
    color:'#000',
    textDecoration: 'none',
    textAlign:'center'
}
    render() {
        const { id, name } = this.props.item;
        const link = "/applications/" + id;
        return (
            <AppContext.Consumer>
                {({ application, setApplication }) => (
                        <div><a href="#" style={this.linkStyle} onClick={() => setApplication({ id: id })} >{name}</a></div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default ApplicationListItem;

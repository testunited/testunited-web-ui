import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext'

export class ComponentListItem extends Component {

  linkStyle = {
    color: '#000',
    textDecoration: 'none',
    textAlign: 'center'
  }

  render() {
    const { id, name } = this.props.item;
    const link = "/applications/" + id;
    return (
      <div><a href="#" style={this.linkStyle} onClick={this.props.onClick} >{name}</a></div>
    )
  }
}

export default ComponentListItem;

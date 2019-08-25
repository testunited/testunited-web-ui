import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import AppContext from '../../AppContext'

function Header() {
  return (
    <AppContext.Consumer>
      {({ application, setApplication }) => (
        <header style={headerStyle}>
          <h1>TestUnited</h1>
          <h3>Application: {application.name}</h3>
          <a href="#" onClick={() => setApplication(undefined)}>(Exit)</a>&nbsp;|&nbsp;
          <NavLink exact style={linkStyle} activeStyle={activeLinkStyle} to="/">Home</NavLink>&nbsp;|&nbsp;
          <NavLink style={linkStyle} activeStyle={activeLinkStyle} to="/testsessions">Test Sessions</NavLink>&nbsp;|&nbsp;
          <NavLink style={linkStyle} activeStyle={activeLinkStyle} to="/testcases">Test Cases</NavLink>&nbsp;|&nbsp;
          <NavLink style={linkStyle} activeStyle={activeLinkStyle} to="/testtargets">Test Targets</NavLink>&nbsp;|&nbsp;
          <NavLink style={linkStyle} activeStyle={activeLinkStyle} to="/testgroups">Test Groups</NavLink>&nbsp;|&nbsp;
          <NavLink style={linkStyle} activeStyle={activeLinkStyle} to="/about">About</NavLink>
        </header>
        )
      }
    </AppContext.Consumer>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const activeLinkStyle = {
  color: '#f00',
  textDecoration: 'bold'
}

export default Header;
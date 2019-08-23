import React from 'react';
import { Link } from 'react-router-dom'
function Header(){
    return (
        <header style={headerStyle}>
            <h1>TestUnited</h1>
            <Link style={linkStyle} to="/">Home</Link>&nbsp;|&nbsp;
            <Link style={linkStyle} to="/testsessions">Test Sessions</Link>&nbsp;|&nbsp; 
            <Link style={linkStyle} to="/testcases">Test Cases</Link>&nbsp;|&nbsp;
            <Link style={linkStyle} to="/testtargets">Test Targets</Link>&nbsp;|&nbsp;
            <Link style={linkStyle} to="/testgroups">Test Groups</Link>&nbsp;|&nbsp;
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color:'#fff',
    textDecoration: 'none'
}
export default Header;
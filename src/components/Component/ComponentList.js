import React, { useContext } from 'react';
import ApplicationListItem from './ComponentListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';
import AppContext from '../../AppContext'
class ApplicationList extends React.Component {

  baseUrl = new Config().getApiHost();
  static contextType = AppContext;

  state = {
    applications: []
  }

  headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }

  bodyStyle = {
    color: '#000',
    textAlign: 'center',
    padding: '10px'
  }

  componentDidMount() {
    axios.get(this.baseUrl + '/applications')
      .then(res => this.setState({ applications: res.data }))
  }

  render() {
    return (
      <React.Fragment>
        <header style={this.headerStyle}>
          <h1>TestUnited</h1>
          <h3>Please select an application to proceed.. </h3>
        </header>
        <body style={this.bodyStyle}>
          {
            this.state.applications.map((app) => (
              <ApplicationListItem key={app.id} item={app} />
            ))
          }
        </body>
      </React.Fragment>
    );
  }
}

export default ApplicationList;
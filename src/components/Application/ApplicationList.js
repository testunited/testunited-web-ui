import React, { useContext } from 'react';
import ApplicationListItem from './ApplicationListItem';
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


  componentDidMount() {
    axios.get(this.baseUrl + '/applications')
      .then(res => this.setState({ applications: res.data }))
  }

  render() {

    return (<div><div><h2>Applications</h2></div>
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableHead">Name</div>
        </div>{
          this.state.applications.map((app) => (
            <ApplicationListItem key={app.id} item={app} />
          ))}
      </div>
    </div>);
  }
}

export default ApplicationList;

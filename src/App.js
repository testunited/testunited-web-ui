import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import TestSessionList from './components/TestSessionList'
import TestSessionInfo from './components/TestSessionInfo'
import TestRunInfo from './components/TestRunInfo'
import About from './components/pages/About'
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';
import getApiHost from './Config';

class App extends React.Component {

  baseUrl = "http://web-api.int.testunited.minikube.local"
  state = {
    testSessions: []
  }

  componentDidMount(){
    axios.get(this.baseUrl+'/testsessions')
     .then(res => this.setState({testSessions: res.data}))
  }
  render(){
    console.log(window.location.hostname);
    console.log(getApiHost());
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/testsessions" render={props => (
          <React.Fragment>
            <TestSessionList testSessions={this.state.testSessions} />
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
        <Route exact path="/testsessions/:testSessionId" component={TestSessionInfo}/>
        <Route exact path="/testruns/:testRunId" component={TestRunInfo}/>
      </div>
      </Router>
    );
  }
}

export default App;

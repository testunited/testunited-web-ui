import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import TestSessionList from './components/TestSessionList'
import TestSessionInfo from './components/TestSessionInfo'
import TestCaseList from './components/TestCaseList'
import TestCaseInfo from './components/TestCaseInfo'
import TestRunInfo from './components/TestRunInfo'
import About from './components/pages/About'
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';
import Config from './Config';

class App extends React.Component {

  // baseUrl = "http://web-api.int.testunited.minikube.local"
  // state = {
  //   testSessions: []
  // }

  // componentDidMount(){
  //   axios.get(this.baseUrl+'/testsessions')
  //    .then(res => this.setState({testSessions: res.data}))
  // }
  render(){
    console.log(window.location.hostname);
    const config = new Config();
    console.log(config.getApiHost());
  return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/testsessions" component={TestSessionList}/>
        <Route exact path="/testcases" component={TestCaseList}/>
        <Route path="/about" component={About}/>
        <Route exact path="/testsessions/:testSessionId" component={TestSessionInfo}/>
        <Route exact path="/testcases/:testCaseId" component={TestCaseInfo}/>
        <Route exact path="/testruns/:testRunId" component={TestRunInfo}/>
      </div>
      </Router>
    );
  }
}

export default App;

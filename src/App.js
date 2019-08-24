import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import TestSessionList from './components/TestSession/TestSessionList'
import TestSessionInfo from './components/TestSession/TestSessionInfo'
import TestCaseList from './components/TestCase/TestCaseList'
import TestCaseInfo from './components/TestCase/TestCaseInfo'
import TestTargetList from './components/TestTarget/TestTargetList'
import TestTargetInfo from './components/TestTarget/TestTargetInfo'
import TestGroupList from './components/TestGroup/TestGroupList'
import TestGroupInfo from './components/TestGroup/TestGroupInfo'
import TestRunInfo from './components/TestRun/TestRunInfo'
import AppHeader from './components/layout/AppHeader'
import About from './components/pages/About'
import Home from './components/pages/Home'
import ApplicationList from './components/Application/ApplicationList'
//import uuid from 'uuid';
import './App.css';
import AppContext from './AppContext'
import axios from 'axios';
import Config from './Config';

class App extends React.Component {

  baseUrl = new Config().getApiHost();

  setApplication = application => {
    if(application == undefined){
      this.setState({application: application});
      return;
    }
    axios.get(this.baseUrl + '/applications/' + application.id)
      .then(res => this.setState({ application: res.data }))
  }

  state = {
    application: undefined,
    setApplication: this.setApplication
  }
  render() {
    return (
      (this.state.application == undefined)?
      <AppContext.Provider value={this.state}><ApplicationList/></AppContext.Provider>:
      <AppContext.Provider value={this.state}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/testsessions" component={TestSessionList} />
            <Route exact path="/testcases" component={TestCaseList} />
            <Route exact path="/testtargets" component={TestTargetList} />
            <Route exact path="/testgroups" component={TestGroupList} />
            <Route path="/about" component={About} />
            <Route exact path="/testsessions/:testSessionId" component={TestSessionInfo} />
            <Route exact path="/testcases/:testCaseId" component={TestCaseInfo} />
            <Route exact path="/testruns/:testRunId" component={TestRunInfo} />
            <Route exact path="/testtargets/:testTargetId" component={TestTargetInfo} />
            <Route exact path="/testgroups/:testGroupId" component={TestGroupInfo} />
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;

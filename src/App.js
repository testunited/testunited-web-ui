import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
import About from './components/pages/About'
//import uuid from 'uuid';
import './App.css';

class App extends React.Component {

  render(){
  return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/testsessions" component={TestSessionList}/>
        <Route exact path="/testcases" component={TestCaseList}/>
        <Route exact path="/testtargets" component={TestTargetList}/>
        <Route exact path="/testgroups" component={TestGroupList}/>
        <Route path="/about" component={About}/>
        <Route exact path="/testsessions/:testSessionId" component={TestSessionInfo}/>
        <Route exact path="/testcases/:testCaseId" component={TestCaseInfo}/>
        <Route exact path="/testruns/:testRunId" component={TestRunInfo}/>
        <Route exact path="/testtargets/:testTargetId" component={TestTargetInfo}/>
        <Route exact path="/testgroups/:testGroupId" component={TestGroupInfo}/>
      </div>
      </Router>
    );
  }
}

export default App;

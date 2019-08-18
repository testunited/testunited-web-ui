import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import TestSessionList from './components/TestSessionList'
import About from './components/pages/About'
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    testSessions: []
  }

  componentDidMount(){
    axios.get('http://web-api.testunited.org/testsessions')
     .then(res => this.setState({testSessions: res.data}))
  }
  render(){
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <TestSessionList testSessions={this.state.testSessions} />
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;

import Button from '@mui/material/Button'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" href="https://reactjs.org">Learn React</Button>
      </header>
    </div>
  );
}

export default App;

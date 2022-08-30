import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  async function onClickHandler() {
    const {data} = await axios('https://node-app-test-one.herokuapp.com/api')
    console.log({data})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickHandler}>BUTTON</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

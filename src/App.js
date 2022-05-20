import logo from './logo.svg';
import LoginButton from './Login';
import Logout from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <Logout></Logout>
      <header className="App-header">
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

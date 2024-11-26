import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Experience from './components/Experience';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Main from './Pages/Main';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Navigation />
      <Main />    
    </div>
  );
}

export default App;

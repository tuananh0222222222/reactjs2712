import logo from './logo.svg';
import './App.scss';
import Cart from './example/Cart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello hiihidsd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <Cart/>

      </header>

    </div>
  );
}

export default App;

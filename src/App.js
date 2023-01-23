import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App App-header">
      <img className='App-logo' src={logo} alt='123'></img>
      <Technologies />
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#s'>Home</a><br></br>
      <a href='#s'>News Feed</a><br></br>
      <a href='#s'>Messages</a>
    </div>
  );
};

const Technologies = () => {
  return (
    <ul>
      <li>css</li>
      <li>JS</li>
      <li>REACT</li>
    </ul>
  )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';


const App = () => {
  return (
    <div className="App App-header">
      <img className='App-logo' src={logo} alt='123'></img>
      <Technologies />
      <Header />
    </div>
  );
}

export default App;

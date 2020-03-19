import React from 'react';
import JokeAdd from './components/JokeAdd';
import JokeList from './components/JokeList';
import styled from 'styled-components';
import Laugh from './img/laugh.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>JOKES!!</h1>
      <JokeAdd />
      <JokeList />
      
    </div>
  );
}

export default App;

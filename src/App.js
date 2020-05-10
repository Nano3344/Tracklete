import React from 'react';
import './App.css';
import { CurrentExercises } from './components/CurrentExercises';
import { Homepage } from './components/Homepage';

function App() {
  return (
    <div>
    <Homepage />
    <CurrentExercises />
    </div>
  );
}

export default App;

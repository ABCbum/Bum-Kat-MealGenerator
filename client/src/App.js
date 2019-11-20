import React from 'react';
import './App.css';
import DishCard from './components/DishCard';

function App() {
  return (
    <div className="App">
      <h1>Let's eat</h1>
      <DishCard type="dessert" />
      <DishCard type="dinner" />
      <DishCard type="lunch" />
      <DishCard type="breakfast and brunch" />
    </div>
  );
}

export default App;

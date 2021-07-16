import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import Test from './components/Test';
import HomePage from './pages/HomePage';

function App() {
  const [color, setColor] = useState("black");

  function click(dulieu) {
    console.log("click");
    setColor(dulieu);
  }

  return (
    <div className="App">
      {console.log('renderapp')}
      <Test color={color} func={click} />
    </div>
  );
}

export default App;

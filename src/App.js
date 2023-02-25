import React from 'react';
import { Section1 } from './sections/section-1';
import { Section2 } from './sections/section-2';
import { Section3 } from './sections/section-3';
import { Section4 } from './sections/section-4';
import './App.css';

function App() {

  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;

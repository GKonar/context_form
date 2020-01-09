import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;

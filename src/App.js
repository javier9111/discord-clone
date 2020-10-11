import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
        <h1>Lets Build a redux app</h1>


        {/*side bar */}
        <Sidebar></Sidebar>
        {/*chat */}

    </div>
  );
}

export default App;


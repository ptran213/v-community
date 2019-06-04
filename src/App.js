import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />

        <h1 className="title">Tìm Phòng/Nhà</h1>
        
        <Item />

      </div>
    </div>
  );
}

export default App;

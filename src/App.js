import React from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList images={images} />
    </div>
  );
}

export default App;

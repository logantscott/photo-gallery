import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import OptionsKeywords from './OptionsKeywords.js';

export default class App extends Component {
  state = { selected: null };

  render() {
    const imageNodes = images
      .filter(image => {
        if (!this.state.selected) return true;

        return image.keyword === this.state.selected;
      });

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };

    return (
      <div className="App">
        <Header />
        <section className="options">

            <select className="images-keyword-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              {images.map((image, i) => {
                return <OptionsKeywords image={image} key={i} />
              })}
            </select>
          </section>
        <ImageList images={imageNodes} />
      </div>
    );
  }
}
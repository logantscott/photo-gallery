import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import { Keywords, Horns } from './Options.js';
import request from 'superagent';

export default class App extends Component {
  state = { selected: null,
            horns: null,
            third: null,
            people: null };

  async componentDidMount() {
    const query = 'https://swapi.co/api/people/';
    const data = await request.get(query)

    this.setState({people: data.body.results});
    console.log(this.state.people)
  }

  render() {
    let hornsOptions = images
      .map(image => {
        return image.horns
      })
    
    hornsOptions = hornsOptions
      .filter((horn, i) => {
        return hornsOptions.indexOf(horn) === i
      })

    let keywordOptions = images
      .map(image => {
        return image.keyword
      })

    keywordOptions = keywordOptions
      .filter((keyword, i) => {
        return keywordOptions.indexOf(keyword) === i
      })
      .sort()

    const imageNodes = images
      .filter(image => {
        if (!this.state.selected) return true;

        return image.keyword === this.state.selected 
      })
      .filter(image => {
        if (!this.state.horns) return true;

        return Number(this.state.horns) === image.horns
      })
      .filter(image => {
        if (!this.state.third) return true;

        return image.title.toLowerCase().includes(this.state.third.toLowerCase()) || image.keyword.toLowerCase().includes(this.state.third.toLowerCase()) || image.description.toLowerCase().includes(this.state.third.toLowerCase())
      });

    

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };

    const handleHornsChange = e => {
      this.setState({ horns: e.target.value });
    };

    const handleThirdChange = e => {
      this.setState({ third: e.target.value });
    };

    return (
      <div className="App">
        <Header />
        <section className="options">

            <label>Keyword: </label>
            <select className="images-keyword-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Keywords
              </option>
              {keywordOptions.map((keyword, i) => {
                return <Keywords keyword={keyword} key={i} />
              })}
            </select>
            <label> Horns: </label>
            <select className="images-horns-filter" onChange={handleHornsChange}>
              <option value="" defaultValue>
                All Horns
              </option>
              {hornsOptions.map((horn, i) => (
                <Horns horn={horn} key={i} />
              ))}
            </select>
            <label> Includes: </label>
            <input type="text" className="images-third-filter" onChange={handleThirdChange}>
            </input>
          </section>
        <ImageList images={imageNodes} />
      </div>
    );
  }
}
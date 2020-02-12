import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import './imagelist.css';

export default class ImageList extends Component {

    render() {
        return (
            <div id='image-list'>
                This is my Image List.
                {this.props.images.map((image, i) => {
                    return <ImageItem image={image} key={i} />
                })}
            </div>
        )
    }
}
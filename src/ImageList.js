import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    render() {
        return (
            <div>
                This is my Image List.
                <ImageItem />

            </div>
        )
    }
}
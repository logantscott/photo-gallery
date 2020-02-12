import React, { Component } from 'react';

export default class ImageItem extends Component {

    render() {
        return (
            <div>

                <img src={this.props.image.url} alt={this.props.image.description} />

            </div>
        )
    }
}
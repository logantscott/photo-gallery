import React, { Component } from 'react';

export default class ImageItem extends Component {

    render() {
        return (
            <div className="grid-item">
                <img src={this.props.image.url} alt={this.props.image.description} />
                <h3>{this.props.image.title}</h3>
                <p>{this.props.image.description}</p>

            </div>
        )
    }
}
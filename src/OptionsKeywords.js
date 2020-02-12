import React, { Component } from 'react';

export default class Keywords extends Component {

    render() {
        return (
            <option value={this.props.image.keyword}>{this.props.image.keyword}</option>
        )
    }
}
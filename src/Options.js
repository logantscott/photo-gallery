import React, { Component } from 'react';

export class Keywords extends Component {

    render() {
        return (
            <option value={this.props.keyword}>{this.props.keyword}</option>
        )
    }
}

export class Horns extends Component {

    render() {
        return (
            <option value={this.props.horn}>{this.props.horn}</option>
        )
    }
}
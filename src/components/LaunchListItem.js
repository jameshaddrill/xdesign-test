import React, { Component } from 'react';

export default class LaunchListItem extends Component {
    render() {
        return ( <li>{this.props.data.mission_name}</li> )
    }
}
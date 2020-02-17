import React, { Component } from 'react';

class LaunchListItem extends Component {
    render() {
        return ( <li>{this.props.data.mission_name}</li> )
    }
}

export { LaunchListItem };
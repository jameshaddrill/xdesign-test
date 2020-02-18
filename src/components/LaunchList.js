import React, { Component } from 'react';
import LaunchListItem from './LaunchListItem';

export default class LaunchList extends Component {
    renderListDefault() {
        const launches = this.props.launches;
        return (
            <ul className="item">
            {
                launches.map((launch, index) => {
                    return ( 
                        <LaunchListItem key={launch.flight_number} data={launch} index={index} />
                    )
                })
            }
            </ul>
        )
    }

    render() {
        return (
            this.renderListDefault()
        ) 
    }
}
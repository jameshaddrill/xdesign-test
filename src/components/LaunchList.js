import React, { Component } from 'react';
import LaunchListItem from './LaunchListItem';

export default class LaunchList extends Component {
    renderListDefault() {
        const launches = this.props.launches;
        const filteredLaunches = this.props.filteredLaunches;
        console.log(filteredLaunches);

        if (filteredLaunches.length > 0) {
            return (
                filteredLaunches.map((launch, index) => {
                    return (
                        <ul className="list">
                            <LaunchListItem key={launch.flight_number} data={launch} index={index} />
                        </ul>
                    )
                })
            )
        } else {
            return (
                launches.map((launch, index) => {
                    return (
                        <ul className="list">
                            <LaunchListItem key={launch.flight_number} data={launch} index={index} />
                        </ul>
                    )
                })
            )
        }
    }

    render() {
        return (
            this.renderListDefault()
        ) 
    }
}
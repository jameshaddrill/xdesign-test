import React from 'react';
import LaunchListItem from './LaunchListItem';

export default function LaunchList(props) {
    function renderListDefault() {
        const launches = props.launches;
        const filteredLaunches = props.filteredLaunches;
        

        if (filteredLaunches.length > 0) {
            return (
                filteredLaunches.map((launch, index) => {
                    return (
                        <LaunchListItem key={launch.flight_number} data={launch} index={index} />
                    )
                })
            )
        } else {
            return (
                launches.map((launch, index) => {
                    return (
                        <LaunchListItem key={launch.flight_number} data={launch} index={index} />
                    )
                })
            )
        }
    }

    return (
        <React.Fragment>
            <ul>{renderListDefault()}</ul>
        </React.Fragment>
    ) 
}
import React, { Component } from 'react';
import axios from 'axios';
import { LaunchListItem } from './LaunchListItem';

class LaunchList extends Component {
    state = {
        launches: [],
        errors: null
    };

    async getLaunches() {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`);
        try {
            this.setState({
              launches: response.data,
            });
          } catch (error) {
              console.log(error);
          }
    }

    componentDidMount() {
        this.getLaunches();
    }

    renderListDefault() {
        const { launches } = this.state;
        return (
            <ul className="item">
            {
                launches.map(launch => {
                    return ( 
                        <LaunchListItem key={launch.flight_number} data={launch} />
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

export { LaunchList };
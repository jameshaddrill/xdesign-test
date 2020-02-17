import React, { Component } from 'react';
import axios from 'axios';

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

    render() {
        const { launches } = this.state;
        return (
            <div>
                {launches.map(launch => {
                    return (<h2 key={launch.flight_number}>{launch.mission_name}</h2>)
                })
            }
            </div>
        ) 
    }
}

export { LaunchList };
import React, { Component } from 'react';
import axios from 'axios';
import LaunchListItem from './LaunchListItem';

export default class LaunchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            errors: null,
            isLoading: true
        };
    }

    async getLaunches() {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`);
        try {
            this.setState({
              launches: response.data,
              isLoading: false
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
        const { isLoading } = this.state;
        return (
            <React.Fragment>
                {!isLoading ? this.renderListDefault() : <h3>Loading</h3>}
            </React.Fragment>
        ) 
    }
}
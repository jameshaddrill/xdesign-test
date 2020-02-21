import React, { Component } from 'react';
import axios from 'axios';

import LaunchList from './LaunchList';
import Header from './Header';
import ListControls from './ListControls';

import homeImage from '../assets/img/launch-home.png';
import homeImageDouble from '../assets/img/launch-home@2x.png'
import homeImageTriple from '../assets/img/launch-home@3x.png'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            errors: null,
            isLoading: true,
            launchYrs: []
        };
    }

    async getLaunches() {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`);
        try {
            this.setState({
              launches: response.data,
              isLoading: false
            });

            this.setLaunchYears(response.data);
          } catch (error) {
              console.log(error);
          }
    }

    setLaunchYears(data) {
        let launchYears = [];
        data.forEach(dataItem => {
            if(launchYears.indexOf(dataItem.launch_year) === -1) {
                launchYears.push(dataItem.launch_year);
            }
        })
        
        this.setState({
            launchYrs: launchYears
        })
    }

    reverse = () => {
        this.setState({
            launches: this.state.launches.reverse()
        })
    }

    reload = () => {
        this.setState({
            isLoading: true
        });

        this.getLaunches();
    }

    componentDidMount() {
        this.getLaunches();
    }

    render() {
        const { launches, isLoading, launchYrs } = this.state;

        return (
            <React.Fragment>
            <main>
                <Header reloadClick={this.reload} />
                <div className="container container--main">
                    <img srcSet={homeImage + " 1x," + homeImageDouble + " 2x," + homeImageTriple + " 3x"}
                        src={homeImage}
                        alt=""
                        className="home-image" />
                    <div class="list-wrapper">
                        <ListControls launchYrs={launchYrs} />
                        {!isLoading ? <LaunchList launches={launches} /> : <h2>Loading...</h2>}
                    </div>
                </div>
            </main>
            </React.Fragment>
        )
    }
}
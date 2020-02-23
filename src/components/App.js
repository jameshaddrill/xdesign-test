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
            renderedLaunches: [],
            errors: null,
            isLoading: true,
            launchYrs: [],
            isReversed: false,
            filteredLaunches: ''
        };
    }

    async getLaunches() {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`);
        try {
            this.setState({
              launches: response.data,
              isLoading: false,
              isReversed: false
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
        this.setState(state => {
            const reversedList = this.state.launches.reverse();
            let reversedFilter = [];

            if (this.state.filteredLaunches.length) {
                reversedFilter = this.state.filteredLaunches.reverse();
            }
            
            return {
                launches: reversedList,
                filteredLaunches: reversedFilter,
                isReversed: !this.state.isReversed
            };
        });
    }

    reload = () => {
        this.setState({
            isLoading: true
        });

        this.getLaunches();
    }

    setFilteredLaunches = (event) => {
        const filterDate = event.target.value;
        let filteredList;

        this.setState(state => {
            if (filterDate === "all") {
                filteredList = [];
            } else {
                filteredList = this.state.launches.filter((launch) => launch.launch_year === filterDate)
            }
            
            return {
                filteredLaunches: filteredList,
            };
        });
    }

    componentDidMount() {
        this.getLaunches();
    }

    render() {
        const { launches, isLoading, launchYrs, isReversed, filteredLaunches } = this.state;

        return (
            <React.Fragment>
            <main>
                <Header reloadClick={this.reload} />
                <div className="container container--main">
                    <img srcSet={homeImage + " 1x," + homeImageDouble + " 2x," + homeImageTriple + " 3x"}
                        src={homeImage}
                        alt=""
                        className="home-image" />
                    <div className="list-wrapper">
                        <ListControls 
                            filterChange={this.setFilteredLaunches}
                            reverseClick={this.reverse} 
                            launchYears={launchYrs} 
                            btnText={isReversed ? 'ascending' : 'descending'}
                         />
                        {!isLoading ? <LaunchList launches={launches} filteredLaunches={filteredLaunches} /> : <h2>Loading...</h2>}
                    </div>
                </div>
            </main>
            </React.Fragment>
        )
    }
}

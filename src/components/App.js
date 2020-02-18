import React, { Component } from 'react';
import axios from 'axios';

import LaunchList from './LaunchList';
import Header from './Header';

import homeImage from '../assets/img/launch-home.png';
import homeImageDouble from '../assets/img/launch-home@2x.png'
import homeImageTriple from '../assets/img/launch-home@3x.png'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            errors: null,
            isLoading: true
        };
    }
// const App = () => {
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

    reverse = () => {
        this.setState({
            launches: this.state.launches.reverse()
        })
    }

    componentDidMount() {
        this.getLaunches();
    }

    render() {
        const { launches, isLoading } = this.state;

        return (
           
            <div className="container container--main">
                <Header />
                <button onClick={this.descend}>Descend!</button> 
                <img srcSet={homeImage + " 1x," + homeImageDouble + " 2x," + homeImageTriple + " 3x"}
                    src={homeImage}
                    alt=""
                    className="home-image" />
                <React.Fragment>
                    {!isLoading ? <LaunchList launches={launches} /> : <h2>Loading...</h2>}
                </React.Fragment>
                
            </div>
        )
    }
}

// export default App;
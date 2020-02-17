import React from 'react';
import LaunchList from './LaunchList';

import homeImage from '../assets/img/launch-home.png';
import homeImageDouble from '../assets/img/launch-home@2x.png'
import homeImageTriple from '../assets/img/launch-home@3x.png'

const App = () => {
    return (
        <div className="container container--main">
            <img srcSet={homeImage + " 1x," + homeImageDouble + " 2x"}
                src={homeImage}
                alt=""
                className="home-image" />
            <LaunchList />
        </div>
    )
}

export default App;
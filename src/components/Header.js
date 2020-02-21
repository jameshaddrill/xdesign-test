import React from 'react';
import spacexLogo from '../assets/spacex-logo.png';

import refreshIcon from '../assets/icon/refresh.png';
import refreshIconDouble from '../assets/icon/refresh@2x.png';
import refreshIconTriple from '../assets/icon/refresh@3x.png';

export default function Header(props) {
    return (
        <header className="site-header">
            <div class="container">
                <h1 className="site-header__title">
                    <img src={spacexLogo} className="site-header__logo" />
                    <span className="sr-only">SpaceX</span> 
                    <span className="site-header__title-text">Launches</span>
                </h1>
            </div>
            <button className="btn btn--edge site-header__btn" onClick={props.reloadClick}>
                Reload Data
                <img srcSet={refreshIcon + " 1x," + refreshIconDouble + " 2x," + refreshIconTriple + " 3x"}
                    src={refreshIcon}
                    alt=""
                    className="btn__refresh-icon" />
            </button> 
        </header>
        
    )
}
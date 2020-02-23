import React from 'react';

import sortIcon from '../assets/icon/sort.png';
import sortIconDouble from '../assets/icon/sort@2x.png';
import sortIconTriple from '../assets/icon/sort@3x.png';

export default function ListControls(props) {
    const years = props.launchYears;
    return (
        <div className="list-controls">
            <select className="btn list-controls__btn" onChange={props.filterChange}>
                <option value="" disabled hidden>Filter by year</option>
                <option value="all">All launches</option>
                {years.map(year => {
                    return (
                        <option value={year} key={year}>{year}</option>
                    )
                })}
            </select>
            <button className="btn list-controls__btn" onClick={props.reverseClick}>Sort {props.btnText} <img srcSet={sortIcon + " 1x," + sortIconDouble + " 2x," + sortIconTriple + " 3x"}
                    src={sortIcon}
                    alt=""
                    className="btn__refresh-icon" /></button>
        </div>
    ) 
}
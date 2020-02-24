import React from 'react';

import sortIcon from '../assets/icon/sort.png';
import sortIconDouble from '../assets/icon/sort@2x.png';
import sortIconTriple from '../assets/icon/sort@3x.png';
import filterIcon from '../assets/icon/select.png';
import filterIconDouble from '../assets/icon/select@2x.png';
import filterIconTriple from '../assets/icon/select@3x.png';

export default function ListControls(props) {
    const years = props.launchYears;
    return (
        <div className="list-controls">
            <div className="list-controls__select-container">
                <select className="btn list-controls__btn" onChange={props.filterChange}>
                    <option value="" hidden>Filter by year</option>
                    <option value="all">All launches</option>
                    {years.map(year => {
                        return (
                            <option value={year} key={year}>{year}</option>
                        )
                    })}
                </select>
                <img srcSet={filterIcon + " 1x," + filterIconDouble + " 2x," + filterIconTriple + " 3x"}
                    src={filterIcon}
                    alt=""
                    className="btn__filter-icon" />
            </div>
            <button className="btn list-controls__btn" onClick={props.reverseClick}>Sort {props.btnText} <img srcSet={sortIcon + " 1x," + sortIconDouble + " 2x," + sortIconTriple + " 3x"}
                    src={sortIcon}
                    alt=""
                    className="btn__sort-icon" /></button>
        </div>
    ) 
}
import React, { Component } from 'react';

export default class ListControls extends Component {
    render() {
        const years = this.props.launchYrs;
        console.log(years);
        return (
            <div class="list-controls">
                <select className="btn">
                    <option value="" disabled hidden>Filter by year</option>

                    {years.map(year => {
                        return (
                            <option value={year} key={year}>{year}</option>
                        )
                    })}
                </select>
                <button className="btn">Sort descending</button>
            </div>
        ) 
    }
}
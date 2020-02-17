import React, { Component } from 'react';

export default class LaunchListItem extends Component {
    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = `${date} ${month} ${year}`;
        return time;
    }

    render() {
        return ( 
            <li className="list-item">
                <span className="list-item__index">#{this.props.index + 1}</span>
                <span className="list-item__title">{this.props.data.mission_name}</span>
                <div className="list-item__details">
                    <span className="list-item__date">{this.timeConverter(this.props.data.launch_date_unix)}</span>
                    <span className="list-item__rocket">{this.props.data.rocket.rocket_name}</span>
                </div>
            </li> )
    }
}
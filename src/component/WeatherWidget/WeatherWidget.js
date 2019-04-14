import React, { Component } from 'react';
import axios from 'axios';

class WeatherWidget extends Component {
    state = {};

    componentDidMount() {
        axios.post("https://api.transposit.com/app/cyeung/roadie/api/v1/execute/dark_sky_get_forcast",
            {
                "parameters": {
                    "latitude": this.props.location.lat(),
                    "longitude": this.props.location.lng()
                }
            }
        )
    }

    render() {
        const data = this.props.data;
        return (
            <div className="RestaurantInfo">
                <div>
                    <img className="restImage" src={ data.image_url } alt="" />
                </div>
                <div className="restInfo">
                    <p>{ data.name }</p>
                    <p>Rating: { data.rating }</p>
                    <p>{ data.distance.toFixed(2) } meters away</p>
                </div>
            </div>
        );
    }
};

export default WeatherWidget;


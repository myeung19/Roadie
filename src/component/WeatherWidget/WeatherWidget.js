import React, { Component } from 'react';
import axios from 'axios';
import "./WeatherWidget.css"

class WeatherWidget extends Component {
    state = {
        weather: null
    };

    componentDidMount() {
        axios.post("https://api.transposit.com/app/cyeung/roadie/api/v1/execute/dark_sky_get_forcast",
            {
                "parameters": {
                    "latitude": this.props.location.lat(),
                    "longitude": this.props.location.lng()
                }
            }
        ).then(res => {
            console.log(res.data.result.results[0]);
            this.setState({
                weather: res.data.result.results[0]
            })
        })
    }

    render() {
        const { weather } = this.state;
        return (
            <div className="WeatherWidget">
                {
                    weather !== null ?
                        (
                            <>
                                <h2>At destination</h2>
                                <div>
                                    <p><br /></p>
                                    <h3>Currently</h3>
                                    <p>    { weather.currently.apparentTemperature }F - { weather.currently.summary }</p>
                                </div>
                                <div>
                                    <h3>In 1 hour</h3>
                                    <p>    { weather.hourly.data[0].apparentTemperature }F
                                        - { weather.hourly.data[0].summary }</p>
                                </div>
                                <br /> <br />
                            </>
                        ) : null
                }
            </div>
        );
    }
};

export default WeatherWidget;


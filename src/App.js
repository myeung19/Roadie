import React, { Component } from 'react';
import axios from "axios";
import SearchButton from './component/SearchButton/SearchButton';
import RideInfo from "./component/RideInfo/RideInfo";
import "./App.css"
import RestaurantInfo from "./component/RestaurantsInfo/RestaurantInfo";
import WeatherWidget from "./component/WeatherWidget/WeatherWidget";


class App extends Component {
    state = {
        rideData: null,
        foodData: null,
    };

    buttonOnClick = () => {
        if(window.oLocation === undefined && window.dLocation !== undefined) {
            console.log(window.oLocation);
            console.log(window.dLocation);
            this.fetchRideInfo(window.oLocation.geometry.location, window.dLocation.geometry.location);
            this.fetchRestaurants(window.dLocation.geometry.location);
        }
    };

    fetchRideInfo = (oLo, dLo) => {
        axios.post("https://api.transposit.com/app/cyeung/roadie/api/v1/execute/lyft_get_cost",
            {
                "parameters": {
                    "start_lat": oLo.lat(),
                    "start_lng": oLo.lng(),
                    "end_lat": dLo.lat(),
                    "end_lng": dLo.lng()
                }
            }).then(res => {
            console.log(res.data.result.results[0].cost_estimates);
            this.setState({
                rideData: res.data.result.results[0].cost_estimates
            })
        });
    };

    fetchRestaurants = (dLo) => {
        axios.post("https://api.transposit.com/app/cyeung/roadie/api/v1/execute/yelp_get_businesses_search",
            {
                "parameters": {
                    "sort_by": "rating",
                    "radius": "700",
                    "latitude": dLo.lat(),
                    "longitude": dLo.lng()
                }
            }).then(res => {
            console.log(res.data.result.results);
            this.setState({
                foodData: res.data.result.results
            })
        });
    };


    render() {
        const { rideData, foodData } = this.state;
        return (
            <div>
                <SearchButton onClick={ this.buttonOnClick } />
                <div className="Content">
                    <div className="Info">
                        {
                            rideData !== null ?
                                rideData.map(e => (
                                    <RideInfo data={ e } />
                                )) : null
                        }
                    </div>
                    <div className="Restaurants">
                        {
                            foodData !== null ?
                                <>
                                    <WeatherWidget location={window.dLocation.geometry.location}/>
                                    <h6>{ window.dLocation.geometry.location.formatted_address }</h6>
                                    {
                                        foodData.map(e => (
                                            <RestaurantInfo data={ e } />
                                        ))
                                    }
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

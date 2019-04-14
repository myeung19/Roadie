import React from 'react';
import "./RestaurantInfo.css"

const restaurantInfo = (props) => {
    const data = props.data;
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
};

export default restaurantInfo;


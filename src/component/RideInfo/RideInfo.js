import React from 'react';

const rideInfo = (props) => {
    const data = props.data;
    return (
        <>
            <h5>{ data.display_name }</h5>
            <ul>
                <li>$ {data.estimated_cost_cents_min / 100} - {data.estimated_cost_cents_max / 100}</li>
            </ul>
        </>
    );
};

export default rideInfo;





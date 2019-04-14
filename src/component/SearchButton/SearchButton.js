import React from 'react';
import './SearchButton.css'

const searchButton = (props) => {
    return (
        <div className="SearchButton">
            <button className="button" onClick={ props.onClick }>Search</button>
        </div>
    );
};

export default searchButton;





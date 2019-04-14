import React, {Component} from 'react';
import './SubmitButton.css'

class SubmitButton extends Component {
    buttonOnPress = () => {
        // console.log("pressed")
    };

    render() {
        return (
            <button className="SubmitButton" onKeyPress={this.buttonOnPress}>Search</button>
        );
    }
}

export default SubmitButton;





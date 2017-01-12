import React, {Component} from 'react';

class WeatherMessage extends Component {

    render(){
        var {temp, location} = this.props;
        return(
            <h3>It is {temp} in {location} !!!</h3>
        );
    }
}
export default WeatherMessage;
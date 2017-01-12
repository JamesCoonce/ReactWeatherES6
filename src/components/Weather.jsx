import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
    handleSearch(location){
        alert(location);
    }
    render() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage/>
            </div>
        );
    }
}

export default Weather;
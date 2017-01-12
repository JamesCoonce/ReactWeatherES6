import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {location: 'Miami', temp: 88 };
    }
    handleSearch(location){
        this.setState({
            location: location,
            temp: 23
        });
    }
    render() {
        var {temp, location} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
}

export default Weather;
import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import {getTemp} from '../api/openWeatherMap';

class Weather extends Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {isLoading: false };
    }
    handleSearch(location){
        var that = this;

        this.setState({ isLoading: true});

        getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    }
    render() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        return (
            <div className="jumbotron">
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
}

export default Weather;
import React from 'react';
import './App.css'
import Map from './components/Map';
import Weather from './components/Weather';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      location: null,
      error: null,
      weather: null,
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    console.log(API_KEY);
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        this.setState({ location: response.data[0], weather: null, searchQuery: ''} )
        return axios.get(`http://localhost:3001/weather?searchQuery=${this.state.searchQuery}`) 
      })
      .then(response => {
        console.log(response.data);
        this.setState({ weather: { forecasts: response.data.forecasts }})
      }).catch(error => {
        this.setState({ error: error.response });
      });
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Welcome to City Explorer!</h1>
        <Form onSubmit={this.handleForm}>
          <Form.Group controlId="cityInput">
            <Form.Control
              style={{fontFamily: 'Montserrat'}}
              type="text" 
              placeholder="Enter city name"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop:'10px', marginBottom:'10px', backgroundColor: 'black', fontFamily: 'Montserrat'}}>
            Explore!
          </Button>
        </Form>
        {this.state.error ? ( 
          <Alert variant="danger" onClose={() => this.setState({ error: null })} dismissible>
            <Alert.Heading>Error: {this.state.error.status}</Alert.Heading>
            <p>{this.state.error.data.error}</p>
          </Alert>
        ) : (<Map location={this.state.location} apiKey={API_KEY} />) }
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;

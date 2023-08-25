import React from 'react';
import './App.css';
import Map from './components/Map';
import Weather from './components/Weather';
import Movie from './components/Movie';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';


const SERVER_URL = import.meta.env.VITE_EXPRESS_SERVER_URL;
const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      location: null,
      error: null,
      weather: null,
      movies: null,
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    if (!SERVER_URL) {
      console.error("Server URL not set yet");
      return;
    }
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        console.log(response.data);
        this.setState({ location: response.data[0]} )
        return axios.get(`${SERVER_URL}/weather?q=${this.state.searchQuery}&lat=${response.data[0].lat}&lon=${response.data[0].lon}`); 
      })
      .then(response => {
        console.log(response.data);
        this.setState({ weather: { forecasts: response.data.forecasts }})
        return axios.get(`${SERVER_URL}/movies?city=${this.state.searchQuery}`);
      })
      .then(response => {
        console.log(response.data);
        this.setState({ movies: response.data }) 
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
              style={{ fontFamily: 'Montserrat' }}
              type="text"
              placeholder="Enter city name"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'black', fontFamily: 'Montserrat' }}
          >
            Explore!
          </Button>
        </Form>
        {this.state.error ? (
          <Alert variant="danger" onClose={() => this.setState({ error: null })} dismissible>
            <Alert.Heading>Error: {this.state.error.status}</Alert.Heading>
            <p>{this.state.error.data.error}</p>
          </Alert>
        ) : (
          <div>
            <Row>
            {/* Map */}
            <Col xs={12} md={4}>
              <Map location={this.state.location} apiKey={API_KEY} />
            </Col>
            {/* Weather */}
            <Col xs={12} md={4} >
              <Weather weather={this.state.weather} />
            </Col>
            {/* Movies*/}
            <Col xs={12} md={4} >
              <Movie movies={this.state.movies} />
            </Col>
          </Row>
        </div>
        )}
      </div>
    );
  }
}

export default App;

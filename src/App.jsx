import React from 'react';
import './App.css'
import Map from './components/Map';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      location: null,
    }
  }

  // setSearchQuery = (query) => {
  //   this.setState({searchQuery: query })
  // }

  handleForm = (e) => {
    e.preventDefault();
    console.log(API_KEY);
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ location: response.data[0] });
      }).catch(error => {
        console.log('Nooooo:', error);
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
        <Map location={this.state.location} apiKey={API_KEY} />
      </div>
    );
  }
}

export default App;

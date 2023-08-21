import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Map extends React.Component {

    render() {
        let { location, apiKey } = this.props;

        return (
            <section>
                {location ? (
                    <Card>
                        <Card.Body style={{fontFamily: 'Montserrat'}}>
                            <Card.Title>City: {location.display_name}</Card.Title>
                            <Card.Text style={{marginBottom: '8px'}}>Lat: {location.lat}</Card.Text>
                            <Card.Text>Long: {location.lon}</Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${location.lat},${location.lon}&zoom=10`} alt="Map" />
                    </Card>
                ) : (
                    <p >Please enter a city to see location details.</p>
                )}
            </section>
        );
    }
}

export default Map;
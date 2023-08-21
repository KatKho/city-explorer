import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Map extends React.Component {

    render() {
        let { location } = this.props;
        

        return (
            <section>
                <h2>Maps</h2>
                {location ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>City: {location.display_name}</Card.Title>
                            <Card.Text>Lat: {location.lat}</Card.Text>
                            <Card.Text>Long: {location.lon}</Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <p>Please enter a city to see location details.</p>
                )}
                <img src={location ? location.icon : "https://placehold.co/600x400"} alt="placeholder map" />
            </section>
        );
    }
}

export default Map;
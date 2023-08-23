import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    render() {
        let { weather } = this.props;

        return (
            <section>
                {weather ? (
                    <Card>
                        <Card.Body style={{fontFamily: 'Montserrat'}}>
                            <Card.Text>Forecasts:</Card.Text>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {weather.forecasts.map((forecast, index) => (
                                    <li key={index}>
                                        Date: {forecast.data}, Description: {forecast.description}
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                ) : (
                    null
                )}
            </section>
        );
    }
}

export default Weather;
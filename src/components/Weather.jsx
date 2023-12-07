import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    render() {
        let { weather } = this.props;

        return (
            <section>
                {weather ? (
                    <Card className="custom-card">
                        <Card.Body style={{fontFamily: 'Montserrat'}}>
                            <Card.Text  style={{fontWeight: 'bold', fontSize:'20px'}}>Forecasts:</Card.Text>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {weather.forecasts.map((forecast, index) => (
                                    <li key={index}>
                                        Date: {forecast.date}, Description: {forecast.description}
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
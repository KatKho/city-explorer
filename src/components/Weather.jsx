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
                            <Card.Text style={{fontWeight: 'bold', fontSize:'20px'}}>Forecasts:</Card.Text>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {weather.forecasts.map((forecast, index) => (
                                    <li key={index}>
                                       <div><strong> Date:</strong> {forecast.date} </div>
                                        <span><strong>Description: </strong>{forecast.description} </span>
                                       <span><img className='weather-icon'src={`https://www.weatherbit.io/static/img/icons/${forecast.icon}.png`} alt="Weather Icon" /></span> 
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                ) : null}
            </section>
        );
    }
}

export default Weather;

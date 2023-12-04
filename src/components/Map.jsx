import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Map extends React.Component {
    render() {
        let { location } = this.props;

        return (
            <section>
                {location ? (
                    <Card className="custom-card">
                        <Card.Body style={{fontFamily: 'Montserrat'}}>
                            <Card.Title style={{fontWeight: 'bold', fontSize:'20px'}}>
                                City: {location.display_name}
                            </Card.Title>
                            <Card.Text style={{marginBottom: '8px'}}>
                                Lat: {location.lat}
                            </Card.Text>
                            <Card.Text>
                                Long: {location.lon}
                            </Card.Text>
                        </Card.Body>
                        <div id="map">
                            <MapContainer center={[location.lat, location.lon]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[location.lat, location.lon]}>
                                    <Popup>
                                        {location.display_name}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </Card>
                ) : (
                   null
                )}
            </section>
        );
    }
}

export default Map;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/images/marker-icon-2x.png',
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png',
    // iconRetinaUrl: '/marker-icon-2x.png',
    // iconUrl: '/marker-icon.png',
    // shadowUrl: '/marker-shadow.png',
  });

const MapView = ({ center }) => {
    const map = useMap();
  
    React.useEffect(() => {
      map.invalidateSize(); 
      map.setView(center, map.getZoom());
    }, [center, map]);
  
    return null;
  };

class Map extends React.Component {
  render() {
    const { location, apiKey } = this.props;

    return (
      <section>
        {location ? (
          <Card className="custom-card">
            <Card.Body style={{ fontFamily: 'Montserrat' }}>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '20px' }}>
                City: {location.display_name}
              </Card.Title>
              <Card.Text style={{ marginBottom: '8px' }}><strong>Lat: </strong>{location.lat}</Card.Text>
              <Card.Text><strong>Long: </strong>{location.lon}</Card.Text>
            </Card.Body>
            <div id="map">
              <MapContainer center={[location.lat, location.lon]} zoom={12} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.lat, location.lon]}>
                  <Popup>{location.display_name}</Popup>
                </Marker>
                <MapView center={[location.lat, location.lon]} />
              </MapContainer>
            </div>
          </Card>
        ) : null}
      </section>
    );
  }
}

export default Map;

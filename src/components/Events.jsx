import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = ({ events }) => {
  if (!events) {
    return null;
  }

  if (events.length === 0) {
    return <div className="events-empty">No events to display.</div>;
  }

  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < events.length; i += chunkSize) {
    chunks.push(events.slice(i, i + chunkSize));
  }

  return (
    <>
    <div>
         <h2>Upcoming Events</h2>
    </div>
    <Carousel className="events-carousel" interval={null} indicators={true} nextLabel="" prevLabel="">
      {chunks.map((chunk, idx) => (
        <Carousel.Item key={idx}>
          <div className="events-slide">
            {chunk.map((event, index) => (
              <div key={event.id || index} className="event-card">
                <img src={event.image_url} alt={event.name} className="event-image"/>
                <div className="event-details">
                  <h3 className="event-name">{event.name}</h3>
                  {/* <p className="event-description">{event.description}</p> */}
                    {/* <div> */}
                    {/* </div> */}
                    <div className="event-footer">
                    <a href={event.event_site_url} target="_blank" rel="noopener noreferrer" className="event-link">Event Details</a>
                    <div className="event-info">
                        <span className="event-time">{new Date(event.time_start).toLocaleString()}</span>
                        <span> to </span>
                        <span className="event-time">{new Date(event.time_end).toLocaleString()}</span>
                    </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
};

export default Events;

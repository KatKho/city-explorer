import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultImageUrl from '../assets/noimage.png'; 

class Movie extends React.Component {
    render() {
        let { movies } = this.props;

        return (
            <section>
                {movies ? (
                    <Card className="custom-card">
                        <Card.Body>
                            <Carousel className="custom-carousel">
                                {movies.map((movie, index) => (
                                    <Carousel.Item key={index} interval={5000}>
                                        <img
                                            className="d-block w-100"
                                            src={movie.image_url || defaultImageUrl}
                                            alt={movie.title}
                                            onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
                                        />
                                        <div className="movie-details">
                                            <Card.Text style={{fontWeight: 'bold', fontSize:'20px'}}>{movie.title}</Card.Text>
                                            <div className="scrollable-content">
                                                <Card.Text>{movie.overview}</Card.Text>
                                                <Card.Text>Released on: {movie.released_on}</Card.Text>
                                                <Card.Text>Average Votes: {movie.average_votes}</Card.Text>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Card.Body>
                    </Card>
                ) : (
                    null
                )}
            </section>
        );
    }
}

export default Movie;

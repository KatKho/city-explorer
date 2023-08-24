import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
    render() {
        let { movies } = this.props;

        return (
            <section>
                <Row>
                    {movies && movies.map((movie, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <Card className="mb-4">
                                <Card.Img variant="top" src={movie.image_url} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        Released on: {movie.released_on}<br />
                                        Average Votes: {movie.average_votes}
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        );
    }
}

export default Movie;

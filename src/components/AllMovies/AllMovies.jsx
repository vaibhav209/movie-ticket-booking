import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import movies from '../../data';
import routes from '../../routes/routes.json';
import { useDispatch } from 'react-redux';
import {
  movieLanguage,
  movieName,
  posterImg,
} from '../../reducers/ticketSlice';

const AllMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBookMovie = (title, language, poster) => {
    dispatch(movieName(title));
    dispatch(movieLanguage(language));
    dispatch(posterImg(poster));
    navigate(routes.SEAT);
  };

  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-4 p-3">
      {movies.map((movie) => {
        return (
          <Card style={{ width: '15rem', height: '100%' }} key={movie.id}>
            <Card.Img
              style={{ width: '15rem', height: '20rem' }}
              variant="top"
              src={movie.Poster}
            />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Language}</Card.Text>
              <Card.Text>IMDb {movie.Ratings[0].Value}</Card.Text>
              <Button
                className="mx-1 align-self-center"
                variant="warning"
                size="md"
                style={{ width: '100%' }}
                onClick={() =>
                  handleBookMovie(movie.Title, movie.Language, movie.Poster)
                }
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default AllMovies;

import React from 'react';
import { Link } from 'react-router-dom';

import { BASE_IMAGE_URL } from '../config/Config';
import AsyncImage from './AsyncImage';

const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.map((movie, index) => (
        <Link to={`/playing/${movie.id}`} key={index}>
          <div className='image-container d-flex justify-content-start m-3'>
            <AsyncImage src={`${BASE_IMAGE_URL}/w500${movie.poster_path}`} alt='movie' className='img-fluid' />
            <div className='position-absolute movie-short-detail'>
              <h5 className='text-white'>{movie.title}</h5>
              <p className='text-white movie-short-detail-desc'>{movie.overview}</p>
            </div>
          </div>
        </Link>

      ))}
    </>
  );
};

export default MovieList;
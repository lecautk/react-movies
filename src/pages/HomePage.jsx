import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { useAlert } from 'react-alert';

import { getLatMovies, getMovieSearch } from '../appRedux/actions';
import MovieList from '../components/MovieList';
import ListHeading from '../components/ListHeading';
import SearchBox from '../components/SearchBox';

function HomePage() {
  const dispatch = useDispatch();
  const { searchedMovie, latestMovies } = useSelector((state) => state);
  const alert = useAlert();

  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const loadLatestMovies = async () => {
      dispatch(getLatMovies());
    };
    loadLatestMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (latestMovies.error) {
      alert.show(latestMovies.errorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latestMovies])

  const fetchSearchMovies = async () => {
    if (searchValue) {
      dispatch(getMovieSearch(searchValue));
    }
  }

  const onSearchChange = (event) => {
    if (event.target.value === '') {
      setIsSearch(false);
    } else {
      setSearchValue(event.target.value);
    }
  }

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setIsSearch(true);
      fetchSearchMovies();
    }
  }

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <ListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} onChange={onSearchChange} onKeyPress={handleSearch} />
      </div>
      {isSearch ? (
        <PullToRefresh onRefresh={() => Promise.resolve(dispatch(getMovieSearch(searchValue)))}>
          {
            searchedMovie.loading ? <div className='text-center'>Loading...</div> : (
              <div className='row'>
                <MovieList movies={searchedMovie.data.results || []} />
              </div>
            )
          }
        </PullToRefresh>
      ) : (
        <PullToRefresh onRefresh={() => Promise.resolve(dispatch(getLatMovies()))}>
          {
            latestMovies.loading ? <div className='text-center'>Loading...</div> : (
              <div className='row'>
                <MovieList movies={latestMovies.data.results || []} />
              </div>
            )
          }
        </PullToRefresh>
      )
      }

    </div >
  )
}

export default HomePage
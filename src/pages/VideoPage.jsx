import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../appRedux/actions/MovieDetails';

import VideoBlock from '../components/VideoBlock'

function VideoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(({ movieDetails }) => movieDetails);

  useEffect(() => {
    //load movie details
    const loadData = async () => {
      dispatch(getMovieDetails(id));
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(movieDetails.error) {
      alert.show(movieDetails.errorMessage);
    }
  }, [movieDetails])

  return (
    <div className="videop">
      <VideoBlock data={movieDetails.data} isLoading={movieDetails.loading} />
    </div>
  )
}

export default VideoPage
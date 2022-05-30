import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_IMAGE_URL } from '../config/Config';

function VideoBlock({ data, isLoading }) {
  const history = useHistory();
  if (isLoading) return <div className="vblock vblock--loading"></div>
  if (data) {
    return (
      <div>
        <div className="vblock">
          <div className="vblock__bg" style={data ? { backgroundImage: `url(${BASE_IMAGE_URL}/original${data.poster_path})` } : {}}>
          </div>
          <div className="vblock__bover"></div>
          <div className="vblock__tover"></div>
          <div className="vblock__playing">Now playing <h1 className="vblock__title">{data ? data.title : ''}</h1></div>
          <span onClick={history.goBack} className="vblock__close">×</span>
        </div>
        <div className="movie-details-content">
          <h2>{data.original_title}</h2>
          {data.genres && data.genres.length > 0 && (
            <div className="banner-meta">
              <ul>
                <li className="category">
                  {data.genres && data.genres.map((genre, index) => {
                    if (index === data.genres.length - 1) {
                      return <a key={index}>{genre.name}</a>
                    }
                    return (
                      <Fragment key={index}>
                        <a>{genre.name}</a>{", "}
                      </Fragment>
                    )
                  })}
                </li>
                <li className="tag-line">
                  {data.tagline}
                </li>
              </ul>
            </div>
          )}
          <p>{data.overview}</p>
        </div>
      </div>

    )
  }
  return <p>Content not found</p>
}

export default VideoBlock

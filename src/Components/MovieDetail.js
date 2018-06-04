import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import Trailer from './Trailer';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
    trailers: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      const movie = await res.json();
      const resTrailer = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      const trailers = await resTrailer.json();

      this.setState({
        movie,
        trailers: trailers.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie, trailers } = this.state;
    return (
      <div>
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
          <MovieInfo>
            <Overdrive id={`${movie.id}`}>
              <Poster
                src={`${POSTER_PATH}${movie.poster_path}`}
                alt={movie.title}
              />
            </Overdrive>
            <div>
              <h1>{movie.title}</h1>
              <h3>Release Date: {movie.release_date}</h3>
              <p>{movie.overview}</p>
              <p>Average Vote: {movie.vote_average}</p>
            </div>
          </MovieInfo>
        </MovieWrapper>
        <div>
          {trailers.map(
            trailer =>
              trailer.type === 'Trailer' ? (
                <Trailer key={trailer.id} trailer={trailer} />
              ) : null
          )}
        </div>
      </div>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  margin-top: 7vh;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

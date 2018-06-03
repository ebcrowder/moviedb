import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import Movie from './Movie';
import Searchbar from './Searchbar';

class MoviesList extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  async movieSearch(term) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&query=${term}&page=1&include_adult=false`
      );

      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // debounce function
    const debounce = (fn, time) => {
      let timeout;

      return function() {
        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
      };
    };

    const movieSearch = debounce(term => {
      this.movieSearch(term);
    }, 1000);

    return (
      <Fragment>
        <Searchbar onSearchTermChange={movieSearch} />
        <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      </Fragment>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

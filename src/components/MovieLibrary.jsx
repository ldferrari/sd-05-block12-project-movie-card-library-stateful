// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onClick = this.onClick.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.props.movies, newMovie] });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  filterMovies() {
    const seaText = this.state.searchText;
    if (this.state.searchText) {
      return (
        this.state.movies.filter((movie) => movie.title.includes(seaText) ||
        movie.subtitle.includes(seaText) || movie.storyline.includes(seaText))
      );
    }
    if (this.state.bookmarkedOnly) {
      return (
        this.state.movies.filter((movie) => movie.bookmarked === true)
      );
    }
    if (this.state.selectedGenre) {
      return (
        this.state.movies.filter((movie) => movie.genre === this.state.selectedGenre)
      );
    }
    return this.state.movies;
  }

  render() {
    return (
      <div>
        <h2 className="sub"> My awesome movie library </h2>
        <SearchBar
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

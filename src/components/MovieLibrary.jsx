import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...data],
    };
    this.search = this.search.bind(this);
    this.mark = this.mark.bind(this);
    this.genre = this.genre.bind(this);
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  mark() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return this.setState({ bookmarkedOnly: false });
    }
    return this.setState({ bookmarkedOnly: true });
  }

  async genre(e) {
    const { value } = e.target;
    await this.setState({ selectedGenre: value });
  }

  search(e) {
    this.setState({ searchText: e.target.value });
  }

  filter() {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const { movies } = this.state;
    const select = movies;
    if (selectedGenre !== '') {
      return select.filter((item) => item.genre === selectedGenre);
    }
    if (bookmarkedOnly === true) {
      return select.filter((item) => item.bookmarked);
    }
    if (searchText !== '') {
      return select.filter((item) => (
        (item.title.includes(searchText))
        || (item.subtitle.includes(searchText))
        || (item.storyline.includes(searchText))
      ));
    }
    return select;
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const select = this.filter();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          mark={this.mark}
          bookmarkedOnly={bookmarkedOnly}
          search={this.search}
          selectedGenre={selectedGenre}
          genre={this.genre}
        />
        <MovieList movies={select} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

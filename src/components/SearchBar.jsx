import React from 'react';

class SearchBar extends React.Component {

  incluir() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    return (
      <div>
        <label htmlFor="searchText" className="caixaInput">
          Inclui o texto:
          <input
            className="searchText caixaInput"
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
      </div>
    );
  }

  favorito() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="caixaCheck">
          <input
            id="caixaCheck"
            className="caixaCheck"
            name="caixaCheck"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        Mostrar somente favoritos
        </label>
      </div>
    );
  }

  filtroGenero() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="caixaInput" className="caixaInput">
          Filtrar por gênero<br />
          <select
            className="caixaInput"
            name="caixaInput"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="formulario">
        <div>
          {this.incluir()}
        </div>
        <div>
          {this.favorito()}
        </div>
        <div>
          {this.filtroGenero()}
        </div>
      </form>
    );
  }
}

export default SearchBar;

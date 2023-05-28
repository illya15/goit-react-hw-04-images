import { Component } from 'react';
export class SearchBar extends Component {
  state = {
    q: '',
  };

  

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.q.trim() === '') {
      alert('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  handleChange = e => {
    this.setState({
      q: e.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            onChange={this.handleChange}
            value={this.state.q}
          />
        </form>
      </header>
    );
  }
}


<header class="searchbar">  
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>;

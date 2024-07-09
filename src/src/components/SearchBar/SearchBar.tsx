// src/components/SearchBar.tsx
import { Component, ChangeEvent } from 'react';

interface Props {
  onSearch: (searchTerm: string) => void;
  onError: (error: Error) => void;
}

interface State {
  searchTerm: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const searchTerm = localStorage.getItem('searchTerm') || '';
    this.state = { searchTerm };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const searchTerm = this.state.searchTerm.trim();
    localStorage.setItem('searchTerm', searchTerm);
    this.props.onSearch(searchTerm);
  };

  handleError = () => {
    this.props.onError(new Error('Test error thrown'));
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
        <button onClick={this.handleError}>Throw Error</button>
      </>
    );
  }
}

export default SearchBar;

import { Component } from 'react';
import './App.css';
import SearchBar from './src/components/SearchBar/SearchBar.tsx';
import SearchResult from './src/components/SearchResult/SearchResult.tsx';
import Loader from './src/components/Loader/Loader.tsx';

interface Item {
  uid: string;
  name: string;
}
interface State {
  items: Item[];
  error: Error | null;
  isLoading: boolean;
}

class App extends Component<never, State> {
  constructor(props: never) {
    super(props);
    this.state = {
      items: [],
      error: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    this.fetchItems(searchTerm);
  }

  fetchItems = (searchTerm: string) => {
    const body = new URLSearchParams();
    if (searchTerm) {
      body.append('name', searchTerm);
    }
    this.setState({ isLoading: true });
    fetch('https://stapi.co/api/v1/rest/animal/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then((data) => this.setState({ items: data.animals }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  errorHandler = (error: Error) => {
    this.setState({ error: error });
  };

  render() {
    const { items, error, isLoading } = this.state;

    if (error) {
      throw error;
    }

    return (
      <div className="App">
        <SearchBar onSearch={this.fetchItems} onError={this.errorHandler} />
        {isLoading ? <Loader /> : <SearchResult items={items} />}
      </div>
    );
  }
}

export default App;

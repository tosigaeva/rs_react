import { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div id="loader" className="loader" />
      </div>
    );
  }
}

export default Loader;

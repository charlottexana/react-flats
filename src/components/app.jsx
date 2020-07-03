import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import GoogleMapReact from 'google-map-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
      <div className="map-container">
        <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geocode from "react-geocode";
import { Grid, TextField } from '@mui/material';
import Address from '../Address';
import { GoogleMapsAPI } from './ClientConfig';
Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      addressone: '',
      city: '',
      area: '',
      state: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 19.169815,
        lng: 77.319717
      }
    };
  }
  componentDidMount() {
    this.getLocation();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.mapCenter.lat !== prevState.mapCenter.lat || this.state.mapCenter.lng !== prevState.mapCenter.lng) {
      this.getLocation();
    }
  }
  getLocation = () => {
    Geocode.fromLatLng(this.state.mapCenter.lat, this.state.mapCenter.lng).then(
      response => {
        const addressone = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          addressone: (addressone) ? addressone : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : '',
        })
      },
      error => {
        console.error(error);
      }
    );
  }
  getCity = (addressArray) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };

  moveMarker(props, marker, event) {
    // console.log(event.latLng.lat(), event.latLng.lng())

    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: (address) ? address : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : '',

          activeMarker: {
            lat: newLat,
            lng: newLng
          },
          mapCenter: {
            lat: newLat,
            lng: newLng
          },
        })
      },
      error => {
        console.error(error);
      }
    );
  }
  render() {
    return (
      <Grid container style={{ height: "90vh", width: "100%", overflowY: 'scroll' }}  >
        <Grid item lg={6} xs={12} >
          <Grid container style={{ position: "relative" }}>
            <Grid item xs={12} style={{ position: "absolute", top: "55px", zIndex: "10", width: '100%' }}>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <TextField style={{ marginBottom: "10px", width: "99%", background: "white" }}
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                )}
              </PlacesAutocomplete>
            </Grid>
            <Grid item xs={12} style={{ position: 'relative', height: "90vh" }}>
              <Map
                google={this.props.google}
                onclick={this.onMapClick}
                initialCenter={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                }}
                center={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                }}
              >
                <Marker
                  position={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                  }}
                  draggable={true}
                  onDragend={this.moveMarker.bind(this)} />

              </Map>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Address city={this.state.city} area={this.state.area} state={this.state.state} />
        </Grid>
      </Grid>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (GoogleMapsAPI)
})(MapContainer)
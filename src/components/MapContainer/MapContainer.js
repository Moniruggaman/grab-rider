import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

  render() {

      const containerStyle = {
        position: 'absolute',
        maxWidth: '100%',
        height: '100%' 
      }

    return (
      <Map google={this.props.google}  
      containerStyle={containerStyle}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
      onClick={this.onMapClicked}
      zoom={4} >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}
        marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBfcrmFb5Cnab6p3C_0DVzJARl4MwwQzOo")
})(MapContainer)

  
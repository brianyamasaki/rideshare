import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { CardSection, InputNoLabel, Spinner, Button } from './common';
import { locationUpdate, locationFormCancel, locationGetGeocode } from '../actions';

class LocationForm extends Component { 
  state = {
    showMap: false,
    layout: {}
  };

  componentWillUnmount() {
    this.props.locationFormCancel();
  }

  onLayout() {
    const layout = Dimensions.get('window');
    this.setState({ layout });
  }

  onShowMap() {
    const { address1, city, state, latitude, longitude } = this.props;
    if (!latitude || !longitude) {
      this.props.locationGetGeocode(address1, city, state);
    }
    this.setState({ showMap: true });
  }

  renderMap() {
    const { address1, city, state, latitude, longitude, loading, viewport } = this.props;

    if (loading) {
      return (
        <Spinner size='large' />
      );
    } else if (latitude && longitude) {
      if (!this.state.showMap) {
        return (
          <Button onPress={this.onShowMap.bind(this)}>
            Show a Map
          </Button>
        );
      }
      const latDelta = Math.abs(viewport.northeast.lat - viewport.southwest.lat);
      const longDelta = Math.abs(viewport.northeast.lng - viewport.southwest.lng);

      return (
        <MapView
          style={{ height: this.state.layout.width, width: this.state.layout.width }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: latDelta,
            longitudeDelta: longDelta
          }}
        />
      );
    } else if (address1 && city && state) {
      return (
        <Button onPress={this.onShowMap.bind(this)}>
          Show a Map
        </Button>
      );
    }
    return (
        <Text>Please Enter an address</Text>
    );
  }

  render() {
    return (
      <View onLayout={this.onLayout.bind(this)}>
        <CardSection>
          <InputNoLabel
            placeholder='Location Name'
            value={this.props.name}
            onChangeText={(text) => this.props.locationUpdate(
              { prop: 'name', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Description'
            value={this.props.description}
            onChangeText={(text) => this.props.locationUpdate({ prop: 'description', value: text })}
            multiline
            style={{ height: 120 }}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='address'
            value={this.props.address1}
            onChangeText={(text) => this.props.locationUpdate({ prop: 'address1', value: text })}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='city'
            value={this.props.city}
            onChangeText={(text) => this.props.locationUpdate({ prop: 'city', value: text })}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='state'
            value={this.props.state}
            onChangeText={(text) => this.props.locationUpdate({ prop: 'state', value: text })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { latitude, longitude, viewport, errorMsg, loading } = state.location;

  return { latitude, longitude, viewport, errorMsg, loading };
};

export default connect(mapStateToProps, 
{ 
  locationUpdate, 
  locationFormCancel, 
  locationGetGeocode 
})(LocationForm);

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, InputNoLabel } from './common';
import { locationUpdate, locationFormCancel } from '../actions';

class LocationForm extends Component { 
  componentWillUnmount() {
    this.props.locationFormCancel();
  }

  render() {
    return (
      <View>
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
  const { name, description, address1, city } = state.location;

  return { name, description, address1, city, state: state.location.state };
};

export default connect(mapStateToProps, { locationUpdate, locationFormCancel })(LocationForm);

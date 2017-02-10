import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import LocationForm from './LocationForm.js';
import { locationUpdate, locationUpdateAll, locationSave, locationDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class LocationEdit extends Component {
  componentWillMount() {
    const { id, name, description, address1, city, state } = this.props.location;
    
    this.props.locationUpdateAll(id, name, description, address1, city, state);
  }

  onSaveChanges() {
    const {     
      name,
      description,
      address1,
      city,
      state
    } = this.props;

    this.props.locationSave({ 
      name,
      description,
      address1,
      city,
      state,
      id: this.props.id 
    });
  }

  onDelete() {
    Alert.alert(
      'Really Delete Location?',
      'Do you really want to delete this location permanently?',
      [
        {
          text: 'Delete',
          onPress: () => this.props.locationDelete({ id: this.props.id })
        },
        {
          text: 'Cancel',
          onPress: () => console.log('delete cancelled'),
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <LocationForm {...this.props} />

          <CardSection>
            <Button onPress={this.onSaveChanges.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>
              Delete Location
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}


const mapStateToProps = state => {
  const { id, name, description, address1, city } = state.location;

  return {
    id,
    name,
    description,
    address1,
    city,
    state: state.location.state
  };
};

export default connect(mapStateToProps, 
{ locationUpdate, 
  locationUpdateAll,
  locationSave, 
  locationDelete }
)(LocationEdit);

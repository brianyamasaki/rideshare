import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import LocationForm from './LocationForm.js';
import { locationUpdate, locationSave, locationDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class LocationEdit extends Component {
  componentWillMount() {
    _.each(this.props.location, (value, prop) => {
      this.props.locationUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { firstname, lastname, phone, email } = this.props;
    this.props.locationSave({ 
      firstname, 
      lastname, 
      phone, 
      email, 
      id: this.props.location.id 
    });
  }

  onDelete() {
    Alert.alert(
      'Really Delete Location?',
      'Do you really want to delete this location permanently?',
      [
        {
          text: 'Delete',
          onPress: () => this.props.locationDelete({ id: this.props.location.id })
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

export default connect(null, 
{ locationUpdate, locationSave, locationDelete }
)(LocationEdit);

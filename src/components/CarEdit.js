import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import CarForm from './CarForm';
import { carUpdate, carSave, carDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class CarEdit extends Component { 
  componentWillMount() {
    _.each(this.props.car, (value, prop) => {
      this.props.carUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { name, seats } = this.props;
    this.props.carSave({ 
      name,
      seats,
      id: this.props.car.id 
    });
  }

  onDelete() {
    Alert.alert(
      'Really Delete Car?',
      'Do you really want to delete this car permanently?',
      [
        {
          text: 'Delete', 
          onPress: () => this.props.carDelete({ id: this.props.car.id })
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel pressed'),
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CarForm />

          <CardSection>
            <Button onPress={this.onSaveChanges.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>
              Delete Car
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, seats } = state.car;

  return { name, seats };
};

export default connect(mapStateToProps, { carUpdate, carSave, carDelete })(CarEdit);

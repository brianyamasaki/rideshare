import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarForm from './CarForm';
import { carUpdate, carSave } from '../actions';
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

  render() {
    return (
      <Card>
        <CarForm />

        <CardSection>
          <Button onPress={this.onSaveChanges.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, seats } = state.car;

  return { name, seats };
};

export default connect(mapStateToProps, { carUpdate, carSave })(CarEdit);

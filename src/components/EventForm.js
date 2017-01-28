import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, InputNoLabel } from './common';
import { eventUpdate, eventFormCancel, carsFetch, participantsFetch } from '../actions';
import ItemChooserList from './ItemChooserList';

class EventForm extends Component { 
  componentWillMount() {
    this.props.carsFetch();
    this.props.participantsFetch();
  }
  componentWillUnmount() {
    this.props.eventFormCancel();
  }
  
  render() {
    return (
      <View>
        <CardSection>
          <InputNoLabel
            placeholder='Event Name'
            value={this.props.name}
            onChangeText={(text) => this.props.eventUpdate(
              { prop: 'name', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Description'
            value={this.props.description}
            onChangeText={(text) => this.props.eventUpdate(
              { prop: 'description', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Date'
            value={this.props.date}
            onChangeText={(text) => this.props.eventUpdate(
              { prop: 'date', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <ItemChooserList items={this.props.allCars} chosen={this.props.cars} />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, date, cars = [], participants = [] } = state.event;
  const allCars = _.map(state.cars, (val, id) => {
    return { ...val, id };
  });
  return { name, description, date, cars, participants, allCars };
};

export default connect(mapStateToProps, 
  { 
    eventUpdate, 
    eventFormCancel, 
    carsFetch,
    participantsFetch 
  })(EventForm);

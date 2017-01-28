import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EventForm from './EventForm';

class EventDetails extends Component {
  onButtonPress() {
    const { name, description, date, cars, participants } = this.props;
    console.log(name, description, date, cars, participants);
    this.props.eventCreate({ name, description, date, cars, participants });
  }

  render() {
    return (
      <Card>
        <EventForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, date, cars = [], participants = [] } = state.event;

  return { name, description, date, cars, participants };
};

export default connect(mapStateToProps, { eventCreate })(EventDetails);

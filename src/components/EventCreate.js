import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EventForm from './EventForm';

class EventDetails extends Component {
  onButtonPress() {
    const { name, description, date } = this.props;

    this.props.eventCreate({ name, description, date });
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
  const { name, description, date } = state.event;
  console.log(name, description, date);

  return { name, description, date };
};

export default connect(mapStateToProps, { eventCreate })(EventDetails);

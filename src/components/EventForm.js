import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, InputNoLabel } from './common';
import { eventUpdate, eventFormCancel } from '../actions';

class EventForm extends Component { 
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, date } = state.event;

  return { name, description, date };
};

export default connect(mapStateToProps, { eventUpdate, eventFormCancel })(EventForm);

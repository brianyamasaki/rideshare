import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EventListItem extends Component {
  onRowPress() {
    Actions.eventEdit({ event: this.props.event });
  }

  render() {
    const { name, date } = this.props.event;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>{name} {date}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default EventListItem;

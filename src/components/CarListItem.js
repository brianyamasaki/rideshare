import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class CarListItem extends Component {
  onRowPress() {
    Actions.carEdit({ car: this.props.car });
  }

  render() {
    const { name, seats } = this.props.car;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>{name} ({seats} seats)</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CarListItem;

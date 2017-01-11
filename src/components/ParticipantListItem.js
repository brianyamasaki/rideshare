import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { CardSection } from './common';

class ParticipantListItem extends Component {
  onRowPress() {
    Actions.participantEdit({ participant: this.props.participant });
  }

  render() {
    const { firstname, lastname } = this.props.participant;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>{firstname} {lastname}</Text>
            <IconFontAwesome name='times' />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ParticipantListItem;

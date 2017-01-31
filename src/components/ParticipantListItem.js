import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ParticipantListItem extends Component {
  onEdit() {
    Actions.participantEdit({ participant: this.props.participant });
  }

  render() {
    const { firstname, lastname } = this.props.participant;
    const { itemStyle, nameStyle } = styles;
    return (
      <TouchableOpacity onPress={this.onEdit.bind(this)} style={itemStyle}>
        <Text style={nameStyle}>{firstname} {lastname}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  itemStyle: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameStyle: {
    fontSize: 18
  }
};

export default ParticipantListItem;

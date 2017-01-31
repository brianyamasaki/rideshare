import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EventListItem extends Component {
  onRowPress() {
    Actions.eventEdit({ event: this.props.event });
  }

  render() {
    const { name, date } = this.props.event;
    const { itemStyle, nameStyle, dateStyle, cardStyle } = styles;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)} style={itemStyle}>
        <CardSection style={cardStyle}>
          <Text style={nameStyle}>{name}</Text>
          <Text style={dateStyle}> {date}</Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  itemStyle: {
    paddingVertical: 4
  },
  nameStyle: {
    fontSize: 18
  },
  dateStyle: {
    fontSize: 18,
    color: '#666'
  }
};

export default EventListItem;

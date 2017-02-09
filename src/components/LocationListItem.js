import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LocationListItem extends Component {
  onEdit() {
    Actions.locationEdit({ location: this.props.location });
  }

  render() {
    const { name } = this.props.location;
    const { itemStyle, nameStyle } = styles;
    return (
      <TouchableOpacity onPress={this.onEdit.bind(this)} style={itemStyle}>
        <Text style={nameStyle}>{name}</Text>
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

export default LocationListItem;

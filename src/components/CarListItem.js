import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CarListItem extends Component {
  onRowPress() {
    Actions.carEdit({ car: this.props.car });
  }

  render() {
    const { name, seats } = this.props.car;
    const { itemStyle, nameStyle, viewStyle } = styles;
    return (
      <TouchableOpacity 
        onPress={this.onRowPress.bind(this)} 
        style={itemStyle}
      >
        <View style={viewStyle}>
          <Text style={nameStyle}>{name}</Text>
          <Text>({seats} seats)</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  itemStyle: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameStyle: {
    fontSize: 18
  }
};

export default CarListItem;

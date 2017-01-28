import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Checkbox } from './common';

class ItemChooser extends Component {
  
  render() {
    return (
      <View style={styles.viewStyle} >
        <Checkbox {...this.props} id={this.props.item.id} />
        <Text>{this.props.item.name}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row'
  }
};

export default ItemChooser;

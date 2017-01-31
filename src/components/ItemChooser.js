import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Checkbox } from './common';

class ItemChooser extends Component {
  
  renderName() {
    const { textStyle } = styles;
    if (this.props.item.name) {
      return <Text style={textStyle}>{this.props.item.name}</Text>
    } else {
      return <Text style={textStyle}>{this.props.item.firstname} {this.props.item.lastname}</Text>
    }
  }

  render() {
    const { viewStyle, textContainerStyle } = styles;
    return (
      <View style={viewStyle} >
        <Checkbox {...this.props} id={this.props.item.id} />
        <View style={textContainerStyle}>
          {this.renderName()}
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row'
  },
  textContainerStyle: {
    paddingTop: 6
  },
  textStyle: {
    fontSize: 16
  }
};

export default ItemChooser;

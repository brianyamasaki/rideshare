import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Checkbox, RadioSelector, EditIcon } from './common';

class ItemChooser extends Component {

  onEdit() {
    this.props.editAction({ [this.props.editKey]: this.props.item });
  }

  renderEditControl() {
    if (this.props.editAction && this.props.editKey) {
      return (
          <EditIcon style={styles.editIconStyle} onPress={this.onEdit.bind(this)} />
      );
    }
  }
  
  renderName() {
    const { textStyle } = styles;
    if (this.props.item.name) {
      return <Text style={textStyle}>{this.props.item.name}</Text>;
    } else {
      return <Text style={textStyle}>{this.props.item.firstname} {this.props.item.lastname}</Text>;
    }
  }

  renderControl() {
    if (this.props.checkAction) {
      return <Checkbox {...this.props} id={this.props.item.id} />;
    }
    return <RadioSelector {...this.props} id={this.props.item.id} />;
  }

  render() {
    const { viewStyle, textContainerStyle } = styles;
    return (
      <View style={viewStyle} >
        {this.renderControl()}
        <View style={textContainerStyle}>
          {this.renderName()}
        </View>
        {this.renderEditControl()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row'
  },
  textContainerStyle: {
    paddingTop: 6,
    flex: 1
  },
  textStyle: {
    fontSize: 16,
  },
  editIconStyle: {
    width: 30,
  }
};

export default ItemChooser;

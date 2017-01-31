import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class Checkbox extends Component {
  state={
    checked: this.props.checked || false
  };

  onPress() {
    const checked = !this.state.checked;
    this.setState({ checked });
    if (this.props.checkAction) {
      this.props.checkAction(this.props.id, checked);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)} >
        <IconFontAwesome 
          name={this.state.checked ? 'check-square-o' : 'square-o'} 
          style={styles.iconStyle} 
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  iconStyle: {
    padding: 4,
    fontSize: 25,
    width: 30
  }
};

export { Checkbox };

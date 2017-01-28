import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class Checkbox extends Component {
  state={
    checked: false
  };

  onPress() {
    const checked = !this.state.checked;
    this.setState({ checked });
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.id);
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress.bind(this)} >
        <IconFontAwesome 
          name={this.state.checked ? 'check-square-o' : 'square-o'} 
          style={styles.iconStyle} 
        />
      </TouchableHighlight>
    );
  }
}

const styles = {
  iconStyle: {
    fontSize: 25
  }
};

export { Checkbox };

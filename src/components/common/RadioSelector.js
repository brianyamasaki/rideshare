import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class RadioSelector extends Component {
  state={
    selected: this.props.selected || false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.select !== this.props.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  onPress() {
    this.setState({ selected: true });
    if (this.props.selectAction) {
      this.props.selectAction(this.props.id);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)} >
        <IconFontAwesome 
          name={this.state.selected ? 'dot-circle-o' : 'circle-o'} 
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

export { RadioSelector };

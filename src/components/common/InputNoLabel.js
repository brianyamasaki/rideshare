import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

class InputNoLabel extends Component {
  render() {
    const { inputStyle, containerStyle } = styles;
    const { secureTextEntry, placeholder, value, onChangeText, multiline, style } = this.props;

    return (
      <View style={[containerStyle, style]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          multiline={multiline}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { InputNoLabel };

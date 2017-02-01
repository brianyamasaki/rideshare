import React from 'react';
import { Text, View } from 'react-native';

const ErrorMessage = (props) => {
  const { containerStyleDft, textStyleDft } = styles;

  if (!props.children) {
    return null;
  }

  return (
    <View style={containerStyleDft}>
      <Text style={textStyleDft}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = {
  containerStyleDft: {
    minHeight: 40,
    padding: 10,
    alignItems: 'center'
  },
  textStyleDft: {
    fontSize: 18,
    lineHeight: 23,
    color: 'darkred'
  }
};

export { ErrorMessage };

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AnchorText = (props) => {
  return (
    <TouchableOpacity 
      style={{ ...styles.containerStyleDft, ...props.containerStyle }} 
      onPress={props.onPress}
    >
      <Text style={{ ...styles.textStyleDft, ...props.textStyle }}>
        {props.children}
      </Text>
    </TouchableOpacity> 
  );
};

const styles = {
  containerStyleDft: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  textStyleDft: {
    color: 'rgb(22, 80, 140)',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center'
  }
};

export { AnchorText };

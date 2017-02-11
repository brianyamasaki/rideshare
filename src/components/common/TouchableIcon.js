import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const TouchableIcon = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      style={[styles.containerStyleDft, props.containerStyle]}
    >
      <IconFontAwesome 
        name={props.name} 
        style={[styles.iconStyleDft, props.iconStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = {
  containerStyleDft: {

  },
  iconStyleDft: {
    fontSize: 20,
    padding: 3
  }
};

export { TouchableIcon };

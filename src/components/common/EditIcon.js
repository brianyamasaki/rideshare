import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const EditIcon = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      style={[styles.containerStyleDft, props.containerStyle]}
    >
      <IconFontAwesome 
        name='pencil' 
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

export { EditIcon };

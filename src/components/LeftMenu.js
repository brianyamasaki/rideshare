import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AnchorText } from './common';

const LeftMenu = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <AnchorText
        onPress={Actions.participants}
        textStyle={textStyle}
      >
        Edit Riders
      </AnchorText>
      <AnchorText
        onPress={Actions.cars}
        textStyle={textStyle}
      >
        Edit Cars
      </AnchorText>
      <AnchorText
        onPress={Actions.locations}
        textStyle={textStyle}
      >
        Edit Locations
      </AnchorText>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

export default LeftMenu;

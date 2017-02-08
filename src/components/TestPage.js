import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import LeftMenu from './LeftMenu';
import { AnchorText } from './common';

class TestPage extends Component {
  closeDrawer() {
    this.drawer.close();
  }

  openDrawer() {
    this.drawer.open();
  }

  render() {
    const { containerStyle, textStyle, drawerStyles } = styles;
    return (
      <Drawer
        type='overlay'
        ref={ref => { this.drawer = ref; }}
        content={<LeftMenu closeDrawer={this.closeDrawer.bind(this)} />}
        closedDrawerOffset={-3}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
        tapToClose
        styles={drawerStyles}
        openDrawerOffset={0.20}
      >
        <View style={containerStyle}>
          <Text style={textStyle}>Test Page Content Goes here</Text>
          <AnchorText onPress={this.openDrawer.bind(this)}>
            Open Drawer
          </AnchorText>
        </View>
      </Drawer>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  },
  drawerStyles: {
    drawer: { 
      shadowColor: '#000000', 
      shadowOpacity: 0.8, 
      shadowRadius: 3
    },
    main: {
      paddingLeft: 3
    },
  }
};

export default TestPage;

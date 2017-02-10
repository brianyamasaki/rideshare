import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import LeftMenu from './LeftMenu';
import EventList from './EventList';
import { participantList, eventList, carList } from '../actions';

class Dashboard extends Component {
  componentWillMount() {
    Actions.refresh({
      leftButtonImage: require('../assets/MenuIcon.png'),
      onLeft: this.openDrawer.bind(this)
    });
  }

  closeDrawer() {
    this.drawer.close();
  }

  openDrawer() {
    this.drawer.open();
  }

  render() {
    const { drawerStyles } = styles;
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
        openDrawerOffset={0.35}
      >
        <EventList />
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

export default connect(null, 
{ 
  participantList,
  eventList,
  carList
})(Dashboard);

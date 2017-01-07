import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import ParticipantList from './components/ParticipantList';
import { logout } from './actions';

const RouterComponent = (props) => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Login' />
      </Scene>
      <Scene key='main'>
        <Scene 
          key='dashboard' 
          component={Dashboard} 
          title='Event Dashboard' 
          rightTitle='Logout'
          onRight={props.logout.bind(this)}
          initial
        />
        <Scene 
          key='participants' 
          component={ParticipantList} 
          title='Participants' 
        />
      </Scene>
    </Router>
  );
};

export default connect(null, { logout })(RouterComponent);

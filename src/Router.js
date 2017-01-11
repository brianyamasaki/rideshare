import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import ParticipantList from './components/ParticipantList';
import ParticipantCreate from './components/ParticipantCreate';
import ParticipantEdit from './components/ParticipantEdit';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
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
          key='events' 
          component={EventList} 
          title='Events' 
        />
        <Scene 
          key='eventDetails' 
          component={EventDetails} 
          title='Event Details' 
        />
        <Scene 
          key='participants' 
          component={ParticipantList} 
          title='Participants' 
          rightTitle='Add'
          onRight={() => Actions.participantCreate()}
        />
        <Scene
          key='participantCreate'
          component={ParticipantCreate}
          title='Add Participant'
        />
        <Scene 
          key='participantEdit'
          component={ParticipantEdit}
          title='Edit Participant'
        />
      </Scene>
    </Router>
  );
};

export default connect(null, { logout })(RouterComponent);

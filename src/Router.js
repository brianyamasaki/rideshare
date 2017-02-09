import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import ParticipantList from './components/ParticipantList';
import ParticipantCreate from './components/ParticipantCreate';
import ParticipantEdit from './components/ParticipantEdit';
import EventList from './components/EventList';
import EventCreate from './components/EventCreate';
import EventEdit from './components/EventEdit';
import CarList from './components/CarList';
import CarCreate from './components/CarCreate';
import CarEdit from './components/CarEdit';
import CreateAccount from './components/CreateAccount';
import LocationList from './components/LocationList';
import LocationCreate from './components/LocationCreate';
import LocationEdit from './components/LocationEdit';
import { logout } from './actions';

const RouterComponent = (props) => {
  return (
    <Router sceneStyle={{ paddingTop: 64 }}>
      <Scene key='auth'>
        <Scene 
          key='login' 
          component={LoginForm} 
          title='Please Login' 
          initial
        />
        <Scene
          key='createAccount'
          component={CreateAccount}
          title='Create Account'
        />
      </Scene>
      <Scene key='main'>
        <Scene 
          key='dashboard' 
          component={Dashboard} 
          title='Dashboard' 
          rightTitle='Logout'
          onRight={props.logout.bind(this)}
          initial
        />
        <Scene 
          key='events' 
          component={EventList} 
          title='Events'
          rightTitle='Add'
          onRight={() => Actions.eventCreate()} 
        />
        <Scene
          key='eventCreate'
          component={EventCreate}
          title='Add Event'
        />
        <Scene 
          key='eventEdit' 
          component={EventEdit} 
          title='Event Details' 
        />
        <Scene 
          key='participants' 
          component={ParticipantList} 
          title='Riders' 
          rightTitle='Add'
          onRight={() => Actions.participantCreate()}
        />
        <Scene
          key='participantCreate'
          component={ParticipantCreate}
          title='Add Rider'
        />
        <Scene 
          key='participantEdit'
          component={ParticipantEdit}
          title='Edit Rider'
        />
        <Scene
          key='cars'
          component={CarList}
          title='Cars'
          rightTitle='Add'
          onRight={() => Actions.carCreate()}
        />
        <Scene
          key='carCreate'
          component={CarCreate}
          title='Add Car'
        />
        <Scene
          key='carEdit'
          component={CarEdit}
          title='Edit Car'
        />
        <Scene
          key='locations'
          component={LocationList}
          title='Locations'
          rightTitle='Add'
          onRight={() => Actions.locationCreate()}
        />
        <Scene
          key='locationCreate'
          component={LocationCreate}
          title='Add Location'
        />
        <Scene
          key='locationEdit'
          component={LocationEdit}
          title='Edit Location'
        />
      </Scene>
    </Router>
  );
};

export default connect(null, { logout })(RouterComponent);

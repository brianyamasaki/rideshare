import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component { 
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBpY0tF_VnWwntensXhv7BE2TCNN1kuuY',
      authDomain: 'events-7dda5.firebaseapp.com',
      databaseURL: 'https://events-7dda5.firebaseio.com',
      storageBucket: 'events-7dda5.appspot.com',
      messagingSenderId: '1062438622955'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

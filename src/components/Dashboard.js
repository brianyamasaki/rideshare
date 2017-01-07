import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from './common';

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Header>Event Name</Header>
        <Card>
          <Text>Dashboard</Text>
        </Card>
      </View>
    );
  }
}

export default Dashboard;

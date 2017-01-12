import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { participantList, eventList, carList } from '../actions';

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Text style={styles.titleStyle}>Dashboard</Text>
          </CardSection>

          <CardSection>
            <Button onPress={this.props.eventList}>
              Events
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.props.participantList}>
              Participants
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.props.carList}>
              Cars
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center'
  }
};
export default connect(null, 
{ 
  participantList,
  eventList,
  carList
})(Dashboard);

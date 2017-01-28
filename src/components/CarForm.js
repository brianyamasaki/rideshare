import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, InputNoLabel } from './common';
import { carUpdate, carFormCancel } from '../actions';

class CarForm extends Component { 
  componentWillUnmount() {
    this.props.carFormCancel();
  }

  render() {
    return (
      <View>
        <CardSection>
          <InputNoLabel
            placeholder='Car Name'
            value={this.props.name}
            onChangeText={(text) => this.props.carUpdate(
              { prop: 'name', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.seats}
            onValueChange={value => this.props.carUpdate({ prop: 'seats', value: value || '1' })}
          >
            <Picker.Item label='1' value={1} />
            <Picker.Item label='2' value={2} />
            <Picker.Item label='3' value={3} />
            <Picker.Item label='4' value={4} />
            <Picker.Item label='5' value={5} />
            <Picker.Item label='6' value={6} />
            <Picker.Item label='7' value={7} />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, seats } = state.car;

  return { name, seats };
};

export default connect(mapStateToProps, { carUpdate, carFormCancel })(CarForm);

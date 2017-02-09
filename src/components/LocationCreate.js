import React, { Component } from 'react';
import { connect } from 'react-redux';
import { locationCreate } from '../actions';
import LocationForm from './LocationForm';
import { Card, CardSection, Button } from './common';

class LocationCreate extends Component {

  onButtonPress() {
    const { name, description, address1, city, state } = this.props;

    this.props.locationCreate({ name, description, address1, city, state });
  }

  render() {
    return (
      <Card>
        <LocationForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, address1, city } = state.location;

  return { name, description, address1, city, state: state.location.state };
};

export default connect(mapStateToProps, { locationCreate })(LocationCreate);

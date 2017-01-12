import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import CarForm from './CarForm';

class CarCreate extends Component {
  onButtonPress() {
    const { name, seats } = this.props;

    this.props.carCreate({ name, seats });
  }

  render() {
    return (
      <Card>
        <CarForm {...this.props} />
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
  const { name, seats } = state.car;

  return { name, seats };
};

export default connect(mapStateToProps, { carCreate })(CarCreate);

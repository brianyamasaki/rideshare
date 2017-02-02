import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { carsFetch } from '../actions/CarActions';
import CarListItem from './CarListItem';
import { FullScreen } from './common';

class CarList extends Component {
  componentWillMount() {
    this.props.carsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ cars }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(cars);
  }

  renderRow(car) {
    return <CarListItem car={car} />;
  }

  render() {
    const { cars } = this.props;

    if (cars && cars.length === 0) {
      return (
        <FullScreen title='No Cars Found' subTitle='Use the Add button above to add cars' />
      );
    }

    return (
      <ListView 
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    );
  }

}

const mapStateToProps = (state) => {
  const cars = _.map(state.cars.cars, (val, id) => {
    return { ...val, id };
  });

  return { cars };
};

export default connect(mapStateToProps, { carsFetch })(CarList);

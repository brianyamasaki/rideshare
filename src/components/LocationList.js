import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { locationsFetch } from '../actions/LocationActions';
import LocationListItem from './LocationListItem';
import { FullScreen } from './common';

class LocationList extends Component {
  componentWillMount() {
    this.props.locationsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ locations }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(locations);
  }

  renderRow(location) {
    return <LocationListItem location={location} />;
  }

  render() {
    const { locations } = this.props;

    if (locations && locations.length === 0) {
      return (
        <FullScreen 
          title='No Locations Found' 
          subTitle='Use the Add button above to add locations' 
        />
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
  const locations = _.map(state.locations, (val, id) => {
    return { ...val, id };
  });
  return { locations };
};

export default connect(mapStateToProps, { locationsFetch })(LocationList);

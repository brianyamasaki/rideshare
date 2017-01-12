import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { eventsFetch } from '../actions/EventActions';
import EventListItem from './EventListItem';

class EventList extends Component {
  componentWillMount() {
    this.props.eventsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(events);
  }

  renderRow(event) {
    return <EventListItem event={event} />;
  }

  render() {
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
  const events = _.map(state.events, (val, id) => {
    return { ...val, id };
  });

  return { events };
};

export default connect(mapStateToProps, { eventsFetch })(EventList);

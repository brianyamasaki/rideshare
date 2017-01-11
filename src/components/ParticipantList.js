import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { participantsFetch } from '../actions/ParticipantActions';
import ParticipantListItem from './ParticipantListItem';

class ParticipantList extends Component {
  componentWillMount() {
    this.props.participantsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ participants }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(participants);
  }

  renderRow(participant) {
    return <ParticipantListItem participant={participant} />;
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
  const participants = _.map(state.participants, (val, id) => {
    return { ...val, id };
  });
  return { participants };
};

export default connect(mapStateToProps, { participantsFetch })(ParticipantList);

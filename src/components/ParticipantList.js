import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { participantsFetch } from '../actions/ParticipantActions';
import ParticipantListItem from './ParticipantListItem';
import { FullScreen } from './common';

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
    const { participants } = this.props;

    if (participants && participants.length === 0) {
      return (
        <FullScreen 
          title='No Participants Found' 
          subTitle='Use the Add button above to add participants' 
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
  const participants = _.map(state.participants, (val, id) => {
    return { ...val, id };
  });
  return { participants };
};

export default connect(mapStateToProps, { participantsFetch })(ParticipantList);

import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { CardSection, InputNoLabel } from './common';
import { 
  eventUpdate, 
  eventFormCancel, 
  carsFetch, 
  eventCarsCheckAction,
  participantsFetch,
  eventParticipantsCheckAction,
  locationsFetch,
  eventLocationSelectAction
} from '../actions';
import ItemChooserList from './ItemChooserList';

class EventForm extends Component { 
  componentWillMount() {
    this.props.carsFetch();
    this.props.participantsFetch();
    this.props.locationsFetch();
  }

  componentWillUnmount() {
    this.props.eventFormCancel();
  }

  render() {
    const { 
      cardStyle, 
      cardTitles, 
      cardTitleContainer, 
      itemSummaryStyle, 
      dateTimeStyle,
      dateTimeCustomStyles
    } = styles;

    return (
      <View>
        <CardSection>
          <InputNoLabel
            placeholder='Event Name'
            value={this.props.name}
            onChangeText={(text) => this.props.eventUpdate(
              { prop: 'name', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Description'
            value={this.props.description}
            onChangeText={(text) => this.props.eventUpdate(
              { prop: 'description', value: text }
              )}
            multiline
            style={{ height: 120 }}
          />
        </CardSection>

        <CardSection>
          <DatePicker
            format="YYYY-MM-DD, h:mm a"
            date={this.props.date}
            mode="datetime"
            placeholder="Select Date and Time"
            minDate="2017-01-01"
            maxDate="2020-01-01"
            confirmBtnText="Set Date and Time"
            cancelBtnText="Cancel"
            onDateChange={datetime => this.props.eventUpdate(
              { prop: 'date', value: datetime }
              )}
            style={dateTimeStyle}
            customStyles={dateTimeCustomStyles}
          />
        </CardSection>

        <CardSection style={cardStyle}>
          <View style={cardTitleContainer}>
            <Text style={cardTitles}>Location</Text>
          </View>
          <ItemChooserList 
            items={this.props.allLocations}
            selectAction={this.props.eventLocationSelectAction}
            selected={this.props.location}
          />
        </CardSection>

        <CardSection style={cardStyle}>
          <View style={cardTitleContainer}>
            <Text style={cardTitles}>Cars</Text>
            <View style={itemSummaryStyle}>
              <Text>{this.props.cars.length} Cars</Text>
            </View>
            <View style={itemSummaryStyle}>
              <Text>{this.props.carsSeats} Seats</Text>
            </View>
          </View>
          <ItemChooserList 
            items={this.props.allCars} 
            checkAction={this.props.eventCarsCheckAction}
            checked={this.props.cars}
          />
        </CardSection>

        <CardSection style={cardStyle}>
          <View style={cardTitleContainer}>
            <Text style={cardTitles}>Participants</Text>
            <Text style={itemSummaryStyle}>{this.props.participants.length} Participants</Text>
          </View>
          <ItemChooserList 
            items={this.props.allParticipants} 
            checkAction={this.props.eventParticipantsCheckAction}
            checked={this.props.participants}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'column'
  },
  cardTitles: {
    fontSize: 20
  },
  cardTitleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemSummaryStyle: {
    paddingTop: 5
  },
  dateTimeStyle: {
    flex: 1
  },
  dateTimeCustomStyles: {
    dateText: {
      fontSize: 18
    }
  }
};

const mapStateToProps = (state) => {
  let {
    cars, 
    participants 
  } = state.event;

  let carsSeats = 0;
  const allCars = _.map(state.cars.cars, (val, id) => {
    return { ...val, id };
  });
  // count seats in selected cars
  cars.forEach(id => {
    if (state.cars.cars[id]) {
      carsSeats += state.cars.cars[id].seats;
    }
  });
  // filter out cars that are no longer in the global allCars list
  cars = cars.filter(id => state.cars.cars[id] !== undefined);
  const allParticipants = _.map(state.participants, (val, id) => {
    return { ...val, id };
  });
  // 
  const allLocations = _.map(state.locations.locations, (val, id) => {
    return { ...val, id };
  });
  // filter out participants that are no longer in the global allParticipants list
  participants = participants.filter(id => state.participants[id] !== undefined);
  return { 
    cars, 
    participants, 
    allCars, 
    allParticipants, 
    carsSeats,
    allLocations
  };
};

export default connect(mapStateToProps, 
  { 
    eventUpdate, 
    eventFormCancel, 
    carsFetch,
    eventCarsCheckAction,
    participantsFetch,
    eventParticipantsCheckAction,
    locationsFetch,
    eventLocationSelectAction
  })(EventForm);

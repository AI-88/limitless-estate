import React, { Component } from 'react';
import Events from '../../components/Events/Events';
import EventMap from '../../components/Events/EventMap';
import FormatDate from '../../components/FormatDate/FormatDate';
import Moment from 'react-moment';
import axios from 'axios';
class MeetUps extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/api/events/meetups').then(({ data }) => {
      this.setState({ meetups: data });
    });
  }

  render() {
    let meetupName, meetupTime, meetupMap, meetupDescription, atVenueLocation;

    if (this.state.meetups) {
      const {
        time,
        description,
        venue,
        name,
        how_to_find_us
      } = this.state.meetups[0];
      atVenueLocation = how_to_find_us;
      meetupDescription = description;
      meetupMap = <EventMap meetupLocation={venue} />;
      meetupName = name;
      meetupTime = (
        <div>
          <Moment format="h:mm a">{time}</Moment> to{' '}
          <Moment add={{ hours: 2 }} format="h:mm a">
            {time}
          </Moment>
          <h6>Every 2nd Tuesday of the Month</h6>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Events
              title={meetupName}
              description={meetupDescription}
              time={meetupTime}
              howToFindUs={atVenueLocation}
              meetupArray={this.state.meetups}
            />
          </div>
          <div className="col-4">
            {meetupMap}
            <div style={{ border: '1px dotted green', margin: '10px' }}>
              Time:
              <h5>{meetupTime}</h5>
            </div>
            <div style={{ border: '1px dotted green', margin: '10px' }}>
              How To Find Us:
              <p>{atVenueLocation}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetUps;
/**
 * <time datetime="1525829400000"><span class="eventTimeDisplay-startDate"><span>Tuesday, May 8, 2018</span><br><span class="eventTimeDisplay-startDate-time"><span>6:30 PM</span></span></span><span class="eventTimeDisplay-endDate"> <span>to <span class="eventTimeDisplay-endDate-partialTime"><span>8:30 PM</span></span></span></span></time>
 */

/**
  *     <Fragment>
      <Moment format="dddd, MMMM Do YYYY, h:mm a">{meetupDate}</Moment> to{' '}
      <Moment add={{ hours: 2 }} format="h:mm a">
        {meetupDate}
      </Moment>
    </Fragment>
  */

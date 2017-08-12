import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);


class App extends Component {
  render() {
    return (
        <BigCalendar events={[]} />
    );
  }
}

export default App;

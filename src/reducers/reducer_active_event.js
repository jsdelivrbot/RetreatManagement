import { FETCH_EVENTS } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_EVENTS:
    var now = new Date().toISOString();
    var futureEvents = [];

    for (let event of action.payload.data) {
      if (event.start_date > now) {
        futureEvents.push(event)
      }
    }

    var soonest = {
      id: futureEvents[0]._id,
      date: futureEvents[0].start_date
    }

    for (let event of futureEvents) {
      if (event.start_date < soonest.date) {
        soonest.id = event._id;
        soonest.date = event.start_date;
      }
    }

      return soonest.id;
    default:
      return state;
  }
}

import React, { useState,useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventsCard from '../../components/EventsCard/EventsCard';

const Events = (props) => {

  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events]);

  return (
    <>
      {events && <>
        <Section title="Events" withoutTopPadding={true}>
          <Grid columns={4}>
          {events.map(event => (
            <EventsCard
              key={event.id}
              route={`/event/${event.id}`}
              title={event.title}
              location={event.location}
              dateTime={event.dateTime}
              availability={event.availability}
              company={event.company}
              buttonText="Find out more"
            />
          ))}
          </Grid>
        </Section>
      </>}
    </>
  );
}

export default Events;
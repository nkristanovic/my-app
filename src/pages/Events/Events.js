import React, { useState,useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventsCard from '../../components/EventsCard/EventsCard';
import LoaderBars from '../../components/Loader/Loader';

const Events = (props) => {

  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, []);

  useEffect(() => {
    event && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events]);

  return (
    <>
      <Section title="Events" withoutTopPadding={true}>
      <LoaderBars />
        {events && 
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
         }
      </Section>
    </>
  );
}

export default Events;
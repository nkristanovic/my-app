import React, { useState,useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Section from '../../components/Section/Section';
import EventInfo from '../../components/EventInfo/EventInfo';

const Event = (props) => {

  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null)

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events]);

  return (
    <>
    {event && <>
      <Section title={event && event.title} withoutTopPadding={true}>
        <EventInfo
          image={event.imageUrl}
          imageAlt={event.imageAlt}
          location={event.location}
          dateTime={event.dateTime}
          availability={event.availability}           
          company={event.company}
          buttonText="Prijavi se"
          description={event.description}
        />
      </Section>
    </>}
  </>           
  );
}

export default Event;
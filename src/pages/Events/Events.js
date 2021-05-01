import React, { useState,useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventsCard from '../../components/EventsCard/EventsCard';
import LoaderBars from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';

const Events = (props) => {

  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
        setEvents(eventsMock);
      }, 1000);
    } 
  }, [loading]);

  useEffect(() => {
    event && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events, event, routeEventId]);

  const [value, setValue] = useState('');
    
  const handleSearch = (e) => {
    setValue(e.target.value)
  }
  const filteredEvent = eventsMock.filter(events => {
    return events.title.toLowerCase().includes(value.toLowerCase());
  })

  return (
    <>
      <Section title="Events" withoutTopPadding={true}>
      <SearchBar disabled={loading} value={value} onChange={handleSearch}/>
      {loading ? <LoaderBars /> : ''}
        {events && 
            <Grid columns={4}>
            {filteredEvent.map(event => (
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
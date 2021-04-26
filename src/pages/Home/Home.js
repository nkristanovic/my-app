import React, {useState, useEffect} from 'react';
import eventsMock from '../../lib/mock/events';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import Event from '../../components/Event/Event';


const Home = () => {

  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    },1000); 
  }, {});

  return (
    <>
      <Hero/>
      <Section title="Featured events">
        {events && 
          <Grid columns={3}>
            {events.map(event => event.isFeatured && (
              <Event 
                key={event.id}
                route={`/event/${event.id}`}
                image={event.imageUrl}
                imageAlt={event.imageAlt}
                title={event.title}
                description={event.shortDescription}
                buttonText="Find out more"
              />
            ))}
          </Grid>
        }
      </Section>
    </>
  );
}

export default Home;
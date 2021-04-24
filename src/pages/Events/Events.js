import React from 'react';
import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid';
import EventsCard from '../../components/EventsCard/EventsCard';

const Events = () => {
  return (
    <>
      <Section title="Events" withoutTopPadding={true}>
        <Grid columns="4">
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />   
        <EventsCard
          title="UX/UI workshop"
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"
          company="Speck"
          buttonText="Find out more"
        />         
        </Grid>
      </Section>
    </>
  );
}

export default Events;
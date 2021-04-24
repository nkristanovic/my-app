import React from 'react';
import Section from '../../components/Section/Section';
import EventInfo from '../../components/EventInfo/EventInfo';
import ImageDesign from '../../assets/images/design.jpg';

const Event = () => {
  return (
    <>
      <Section title="UX/UI design workshop" withoutTopPadding={true}>
        <EventInfo
          image={ImageDesign}
          location="Hodnik FOI-a"
          dateTime="14.10 (9:00-16:00h)"
          availability="15/60"           
          company="Speck"
          buttonText="Prijavi se"
          descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo error vitae recusandae? Vel blanditiis ipsam autem, non architecto quia delectus, 
          temporibus dolorem totam voluptas, modi officiis similique qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi, et facere quaerat sit delectus 
          possimus modi culpa, molestiae earum aperiam cum commodi explicabo eum labore, a quia numquam debitis."
        />
      </Section>
    </>           
  );
}

export default Event;
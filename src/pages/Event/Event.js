import React from 'react';
import Section from '../../components/Section/Section';
import EventInfo from '../../components/EventInfo/EventInfo';

import ImageDesign from '../../assets/images/design.jpg';

function Event() {
  return (
    <>
        <Section title="UX/UI design workshop">
            <EventInfo
              image={ImageDesign}
              itemTitle1="Lokacija"
              itemValue1="Hodnik FOI-a"

              itemTitle2="Lokacija"
              itemValue2="Hodnik FOI-a"

              itemTitle3="Lokacija"
              itemValue3="Hodnik FOI-a"

              itemTitle4="Lokacija"
              itemValue4="Hodnik FOI-a"
              buttonText="Prijavi se"

              descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo error vitae recusandae? Vel blanditiis ipsam autem, non architecto quia delectus, temporibus dolorem totam voluptas, modi officiis similique qui Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit sequi, et facere quaerat sit delectus possimus modi culpa, molestiae earum aperiam cum commodi explicabo eum labore, a quia numquam debitis."
            />
        </Section>
    </>      
        
  );
}

export default Event;
import React from 'react';
import { Button } from '../../lib/style/generalStyles';
import {
	EventsCard as EventsCardWrapper,
	Title,
	Content,
	ContentRow,
	Item,
	ItemTitle,
	ItemValue
} from './EventsCardStyle';

const EventsCard = ({ 
    title,
	location,
	dateTime,
	availability,
	company,
    buttonText
}) => {
    return (
			<EventsCardWrapper>
				<Title>{title}</Title>
				<Content>
					<ContentRow>
						<Item>
							<ItemTitle>Lokacija</ItemTitle>
							<ItemValue>{location}</ItemValue>
						</Item>
						<Item>
							<ItemTitle>Datum i vrijeme</ItemTitle>
							<ItemValue>{dateTime}</ItemValue>
						</Item>
					</ContentRow>
					<ContentRow>
						<Item>
							<ItemTitle>Slobodna mjesta</ItemTitle>
							<ItemValue>{availability}</ItemValue>
						</Item>
						<Item>
							<ItemTitle>Firma</ItemTitle>
							<ItemValue>{company}</ItemValue>
						</Item>
					</ContentRow>
                 </Content>
                 <Button to="/event"> {buttonText} </Button>
            </EventsCardWrapper>
    );
}

export default EventsCard;
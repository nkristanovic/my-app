import React from 'react';
import Button from '../Button/Button';
import {
	SectionEvent,
	EventInfo as EventInfoWrapper,
	Figure,
	Image,
	Content,
	ContentRow,
	Item,
	ItemTitle,
	ItemValue,
	Description
} from './EventInfoStyle';

const EventInfo = ({
    image,
    location,
	dateTime,
	availability,
	company,
    descripton,
    buttonText
}) => {
    return (
        <SectionEvent>
			<EventInfoWrapper>
				<Figure>
                	<Image src={image} alt="Design" /> 
				</Figure>
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
					<Button text={buttonText}/>
				</Content>
			</EventInfoWrapper>
			<Description>{descripton}</Description>
		</SectionEvent>
    );
}
   
export default EventInfo;
import React from 'react';
import { Button } from '../../lib/style/generalStyles';
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
    description,
    buttonText,
	imageAlt
}) => {
    return (
        <SectionEvent>
			<EventInfoWrapper>
				<Figure>
                	<Image src={image} alt={imageAlt} /> 
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
					<Button to="#">{buttonText}</Button> 
				</Content>
			</EventInfoWrapper>
			<Description>{description}</Description>
		</SectionEvent>
    );
}
   
export default EventInfo;
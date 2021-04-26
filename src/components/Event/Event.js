import React from 'react';
import { Button } from '../../lib/style/generalStyles';
import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description,
} from './EventStyle';

const Event = ({
    image,
    title,
    description,
    buttonText
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt="Design" />
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
           <Button to="/event">{buttonText} </Button>
        </EventWrapper>
    );
}

export default Event;
import React from 'react';
import Button from '../Button/Button';
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
           <Button text={buttonText} />
        </EventWrapper>
    );
}

export default Event;
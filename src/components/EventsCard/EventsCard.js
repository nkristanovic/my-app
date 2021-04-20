import React from 'react';
import Button from '../Button/Button';
import './EventsCard.scss';

const EventsCard = ({ 
    eventTitle1,
    itemTitle1,
    itemValue1,
    
    itemTitle2,
    itemValue2,
    
    itemTitle3,
    itemValue3,

    itemTitle4,
    itemValue4,
    buttonText
}) => {
    return (
			<div className="EventCard">
				<h2 className="EventCard-Title">{eventTitle1}</h2>
				<div className="EventCard-Content">
					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">{itemTitle1}</h3>
							<p className="EventCard-ItemValue">{itemValue1}</p>
						</div>
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">{itemTitle2}</h3>
							<p className="EventCard-ItemValue">{itemValue2}</p>
						</div>
					</div>
					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">{itemTitle3}</h3>
							<p className="EventCard-ItemValue">{itemValue3}</p>
						</div>
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">{itemTitle4}</h3>
							<p className="EventCard-ItemValue">{itemValue4}</p>
						</div>
					</div>
                 </div>
                 <Button text={buttonText}/>
             </div>
    );
}

export default EventsCard;
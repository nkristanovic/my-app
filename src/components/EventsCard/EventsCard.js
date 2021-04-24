import React from 'react';
import Button from '../Button/Button';
import './EventsCard.scss';

const EventsCard = ({ 
    title,
	location,
	dateTime,
	availability,
	company,
    buttonText
}) => {
    return (
		<section className="SectionEvents">
			<div className="EventCard">
				<h2 className="EventCard-Title">{title}</h2>
				<div className="EventCard-Content">
					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Lokacija</h3>
							<p className="EventCard-ItemValue">{location}</p>
						</div>
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
							<p className="EventCard-ItemValue">{dateTime}</p>
						</div>
					</div>
					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
							<p className="EventCard-ItemValue">{availability}</p>
						</div>
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Firma</h3>
							<p className="EventCard-ItemValue">{company}</p>
						</div>
					</div>
                 </div>
                 <Button text={buttonText}/>
            </div>
		</section>
    );
}

export default EventsCard;
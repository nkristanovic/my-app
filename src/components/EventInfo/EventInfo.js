import React from 'react';
import Button from '../Button/Button';
import './EventInfo.scss';

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
        <section className="SectionEvent">
			<div className="EventInfo">
				<figure className="EventInfo-Figure">
                	<img src={image} alt="Design" className="EventInfo-Image"/> 
				</figure>
				<div className="EventInfo-Content">
					<div className="EventInfo-ContentRow">
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">Lokacija</h3>
						    <p className="EventInfo-ItemValue">{location}</p>
                        </div>
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">Datum i vrijeme</h3>
							<p className="EventInfo-ItemValue">{dateTime}</p>
						</div>
					</div>
					<div className="EventInfo-ContentRow">
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">Slobodna mjesta</h3>
							<p className="EventInfo-ItemValue">{availability}</p>
						</div>
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">Firma</h3>
							<p className="EventInfo-ItemValue">{company}</p>
						</div>
					</div>
					<Button text={buttonText}/>
				</div>
			</div>
			<p className="EventInfo-Description">{descripton}</p>
		</section>
    );
}
   

export default EventInfo;
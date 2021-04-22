import React from 'react';
import Button from '../Button/Button';
import './EventInfo.scss';

const EventInfo = ({
    image,
    itemTitle1,
    itemValue1,
    itemTitle2,
    itemValue2,
    itemTitle3,
    itemValue3,
    itemTitle4,
    itemValue4,
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
							<h3 className="EventInfo-ItemTitle">{itemTitle1}</h3>
						    <p className="EventInfo-ItemValue">{itemValue1}</p>
                        </div>
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">{itemTitle2}</h3>
							<p className="EventInfo-ItemValue">{itemValue2}</p>
						</div>
					</div>
					<div className="EventInfo-ContentRow">
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">{itemTitle3}</h3>
							<p className="EventInfo-ItemValue">{itemValue3}</p>
						</div>
						<div className="EventInfo-Item">
							<h3 className="EventInfo-ItemTitle">{itemTitle4}</h3>
							<p className="EventInfo-ItemValue">{itemValue4}</p>
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
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
        <section class="SectionEvent">
			<div class="EventInfo">
				<figure class="EventInfo-Figure">
                	<img src={image} alt="Design" class="EventInfo-Image"/> 
				</figure>
				<div class="EventInfo-Content">
					<div class="EventInfo-ContentRow">
						<div class="EventInfo-Item">
							<h3 class="EventInfo-ItemTitle">{itemTitle1}</h3>
						    <p class="EventInfo-ItemValue">{itemValue1}</p>
                        </div>
						<div class="EventInfo-Item">
							<h3 class="EventInfo-ItemTitle">{itemTitle2}</h3>
							<p class="EventInfo-ItemValue">{itemValue2}</p>
						</div>
					</div>
					<div class="EventInfo-ContentRow">
						<div class="EventInfo-Item">
							<h3 class="EventInfo-ItemTitle">{itemTitle3}</h3>
							<p class="EventInfo-ItemValue">{itemValue3}</p>
						</div>
						<div class="EventInfo-Item">
							<h3 class="EventInfo-ItemTitle">{itemTitle4}</h3>
							<p class="EventInfo-ItemValue">{itemValue4}</p>
						</div>
					</div>
					<Button text={buttonText}/>
				</div>
			</div>
			<p class="EventInfo-Description">{descripton}</p>
		</section>
    );
}
   

export default EventInfo;
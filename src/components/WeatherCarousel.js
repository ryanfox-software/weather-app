import React from "react";

import { Carousel, IconSettings } from '@salesforce/design-system-react';

const items =[
	{
		id:1,
		heading: "milwaukee",
		description: "Weather not obtained. Please update weather report by selecting city",
		src:''
	},
	{
		id:2,
		heading: "minneapolis",
		description:"Weather not obtained. Please update weather report by selecting city",
		src:''
	},
	{
		id:3,
		heading: "chicago",
		description:"Weather not obtained. Please update weather report by selecting city",
		src:''
	},
	{
		id:4,
		heading: "dallas",
		description:"Weather not obtained. Please update weather report by selecting city",
		src:''
	},
];

class WeatherCarousel extends React.Component {
	static displayName = 'Weather Carousel';

	render() {
		const myList = this.props.list.slice();
		for(let i = 0; i<this.props.list.length; ++i){
			for(let j = 0; j<4; ++j){
				if(myList[i].city === items[j].heading){
					items[j].description = myList[i].description;
					items[j].src = `http://openweathermap.org/img/w/${myList[i].icon}.png`
				}
			}
		}
		return (
			<IconSettings iconPath="/assets/icons">
				<div
					style={{
						maxWidth: '44%',
					}}className="carousel"
				>


					<Carousel
						hasPreviousNextPanelNavigation
						id="weather-carousel"
						items={items}
						itemsPerPanel={3}
					/>
				</div>
			</IconSettings>
		);
	}
}

export default WeatherCarousel;

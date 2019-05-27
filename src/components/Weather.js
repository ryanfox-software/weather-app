import React from "react";
import { Button, Dropdown, DropdownTrigger, IconSettings } from '@salesforce/design-system-react';

class Weather extends React.Component{

  render(){
    return (
			<IconSettings iconPath="/assets/icons">
				<Dropdown
					align="right"
          onSelect={this.props.getWeather}
					options={[
						{ label: 'Milwaukee', value: 'milwaukee' },
						{ label: 'Minneapolis', value: 'minneapolis' },
						{ label: 'Chicago', value: 'chicago' },
						{ label: 'Dallas', value: 'dallas' },
					]}
				>
					<DropdownTrigger>
						<Button
							iconCategory="utility"
							iconName="down"
							iconPosition="right"
							label="Select City"
						/>
					</DropdownTrigger>
				</Dropdown>
			</IconSettings>
		);
  }
};

export default Weather;

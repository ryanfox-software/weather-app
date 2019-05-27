import React from "react";

import { DataTable, DataTableColumn, DataTableCell, IconSettings } from '@salesforce/design-system-react';

const columns = [
	<DataTableColumn
		key="city"
		label="City Name"
		property="city"
		width="6em"
	/>,

	<DataTableColumn
		key="Temperature"
		label="temperature"
		property="temperature"
		width="5em"
	/>,

	<DataTableColumn
		key="Humidity"
		label="humidity"
		property="humidity"
		width="5em"
	/>,

	<DataTableColumn
		key="Description"
		label="description"
		property="description"
		width="5em"
	/>,
];

class Titles extends React.Component {

  static displayName = 'WeatherDataTable';

  render(){
    return (
      <IconSettings iconPath="/assets/icons">
      				<div style={{ overflow: 'auto' }}>
      					<h3 className="slds-text-heading_medium slds-m-vertical_medium">
      						Weather Data Table
      					</h3>
      					<DataTable
      						items={this.props.list}
      						id="WeatherDataTable"
      						fixedLayout
      					>
      						{columns}
      					</DataTable>
      				</div>
      			</IconSettings>
    );
  }
};

export default Titles;

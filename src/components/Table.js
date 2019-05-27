import React from "react";

import { DataTable, DataTableColumn, DataTableCell, IconSettings } from '@salesforce/design-system-react';

const columns = [
	<DataTableColumn
		key="city"
		label="City Name"
		property="cityName"
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

  static displayName = 'DataTableExample';

	state = {
		items: [
			{

      }
    ]
	};

  render(){
    return (
      <IconSettings iconPath="/assets/icons">
      				<div style={{ overflow: 'auto' }}>
      					<h3 className="slds-text-heading_medium slds-m-vertical_medium">
      						Basic Fixed Layout
      					</h3>
      					<DataTable
      						items={this.state.items}
      						id="DataTableExample-1-default"
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

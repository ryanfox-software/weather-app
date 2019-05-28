import React from "react";
import '../App.css';
import { DataTable, DataTableColumn, DataTableCell, IconSettings } from '@salesforce/design-system-react';

const columns = [
	<DataTableColumn
		key="City"
		label="City Name"
		property="city"
		width="6em"
	/>,

	<DataTableColumn
		key="Temperature"
		label="Temperature"
		property="temperature"
		width="5em"
	/>,

	<DataTableColumn
		key="Humidity"
		label="Humidity"
		property="humidity"
		width="5em"
	/>,

	<DataTableColumn
		key="Description"
		label="Description"
		property="description"
		width="5em"
	/>,
];

class Table extends React.Component {

  static displayName = 'WeatherDataTable';

  render(){
    return (
      <IconSettings iconPath="/assets/icons">
      				<div className="Table">
      					<h3 className="head">
      						
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

export default Table;

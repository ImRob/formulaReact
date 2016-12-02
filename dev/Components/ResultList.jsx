import React, { Component } from 'react';
import {Result} from './Result.jsx';
import {CircuitInfo} from'./CircuitInfo';

export class ResultList extends Component {
	render() {
		if(this.props.Results){
			//re assigning to lowercase so we don't get confused with a class
			let {Results:results} = this.props;
		return (
			<table className="resultList">
				<thead>
					<tr>
						<th>pos</th>
						<th>no</th>
						<th>driver</th>
						<th>constructor</th>
						<th>laps</th>
						<th>grid</th>
						<th>time</th>
						<th>pts</th>

					</tr>
				</thead>
			<tbody>{results.map((result, ind)=>{
				return <Result key={ind} {...result}/>
			})}</tbody>
			</table>
		);


		}else{
			return null
		}

	}
}

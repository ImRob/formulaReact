import React, { Component } from 'react';

export class Result extends Component {
	render() {
		// console.log(this.props);
		let {position, points, number, laps, grid} = this.props;
		let {familyName, givenName} = this.props.Driver;
		let {time} = (this.props.Time ? this.props.Time : 'na');
		let {name} = this.props.Constructor;

		return (
				<tr>
					<td>{position}</td> 
					<td>{number}</td> 
					<td>{givenName }{' '}{familyName}</td> 
					<td>{name}</td> 
					<td>{laps }</td> 
					<td>{grid}</td>
					<td>{time}</td>
					<td>{points}</td>
				</tr>
		);
	}
}

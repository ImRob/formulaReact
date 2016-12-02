import React, { Component } from 'react';
import {Link} from 'react-router';

export class CircuitInfo extends Component {
	render() {
		if (Object.keys(this.props.Circuit).length > 0){
			let {circuitName, url} = this.props.Circuit;
			let {country, locality} = this.props.Circuit.Location;
			let {raceName,round,season} = this.props;

			return (
				<div className="circuitInfo">
					<span className="round">Rd. {round}</span><br/>
					<span className="">{season}</span>
					<h1>{raceName}<br/>
						<a href={url}>{circuitName}</a>
					</h1>
				</div>
			);
		}else{
			return null;
		}

	}
}

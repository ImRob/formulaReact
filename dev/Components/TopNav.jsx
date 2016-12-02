import React, { Component } from 'react';

export class TopNav extends Component {
	render() {
		return (
			<ul className="topNav">
				<li className="on">Home</li>
				<li>Drivers</li>
				<li>Races</li>
				<li>Store</li>
				<li>Contact</li>
			</ul>
		);
	}
}

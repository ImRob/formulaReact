import React, { Component } from 'react';

export class BackgroundImage extends Component {
	render() {
		// debugger;
		let raceId = this.props.raceId ? Number(this.props.raceId) : 1;
		return (
			<div className="heroImage" style={{backgroundImage:"url(/img/"+raceId+".jpg)"}}></div>
		);
	}
}

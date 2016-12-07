import React, { Component } from 'react';
import {TopNav} from './TopNav';
import {Link} from 'react-router';
import {BackgroundImage} from './BackgroundImage';

export class HeroImage extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		/*prevent hero image background from re rendering during ajax */
		if(nextProps.params.raceId === this.props.params.raceId){
			console.log('shouldComponentUpdate: true (raceID\'s are equal)')
			return true;
		}else{
			console.log('shouldComponentUpdate: false (raceID\'s have changed)')
			return false;
		}
	}
	render() {
		console.log(this.props)

		if(Object.keys(this.props.raceResult).length > 0){
			/* circuit information */
			let {circuitName, url} = this.props.raceResult.Circuit;
			let {country, locality} = this.props.raceResult.Circuit.Location;
			/* race information */
			let {raceName,round,season} = this.props.raceResult;
			/* router information */
			let raceId = this.props.params.raceId ? Number(this.props.params.raceId) : 1;

		return (
			<div className="heroImage" style={{backgroundImage:"url(/img/"+raceId+".jpg)"}}>
				<TopNav/>
				<div className="headlineWrapper">
					<h1 className="headLine"><span>{season}</span>{raceName}</h1>
					<span className="round">round {round}</span>
					<span className="byline">{circuitName}</span><br/>
					 <Link className="button" to={(raceId+1) < this.props.total ? (raceId+1).toString() : '1'}>previous race</Link>
					 <Link className="button" to={(raceId-1) > 0 ? (raceId-1).toString() : (this.props.total-1).toString()}>next race</Link>
				</div>
			</div>
		)
		}else{
			return null;
		}

	}
}


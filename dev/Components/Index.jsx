import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import {HeroImage} from './Components/HeroImage.jsx'
import {RaceResults} from './Components/RaceResults.jsx'
import {Router} from 'react-router'
import Routes from './Router/Routes'


import React, { Component } from 'react';

export class Index extends Component {
	constructor(){
		super()
		this.state={
			raceResult:{}
		}
	}
	componentDidMount() {
		console.log(this.props.params)

		var that = this;
		fetch('http://ergast.com/api/f1/2016/3/results.json').then(function(response){
			// debugger;
			return response.json();
		}).then(function(data){
			var data = data.MRData.RaceTable.Races[0];
			that.setState({
				raceResult: Object.assign({}, that.state.raceResult, data)
			})
		})

	}
	componentWillUpdate(nextProps, nextState) {
		console.log('updating');
	}
	render() {
		return (
			<div>
				<HeroImage/>
				{this.props.children}
			</div>
		);
	}
}


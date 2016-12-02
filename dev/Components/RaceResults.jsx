import React, { Component } from 'react';
import {CircuitInfo} from'./CircuitInfo';
import {ResultList} from'./ResultList';
import {HeroImage} from './HeroImage.jsx'

import 'whatwg-fetch';

let localData = '../data/results.json';
let realData ='http://ergast.com/api/f1/2016/1/results.json';


export class RaceResults extends Component {
	constructor(){
		super()
		this.state={
			raceResult:{},
			total:0,
			params:{}
		}
	}
	getData(raceId=1){
		var that = this;
		fetch('http://ergast.com/api/f1/2016/' + raceId + '/results.json').then(function(response){
			return response.json();
		}).then(function(data){
			var data = data.MRData;
			that.setState({
				raceResult: Object.assign({}, that.state, data.RaceTable.Races[0]),
				total: Number(data.total)
			})
		})
	}
	componentDidMount() {
		var raceId = this.props.params.raceId;
		this.getData(raceId)
	}
	componentWillUpdate(nextProps, nextState) {
		/* if we changed routes params will be different and we can fetch new data based on nextProps */
		if(nextProps.params != this.props.params){
			this.getData(nextProps.params.raceId )
		}
	}
	render() {
		return (
			<div>
				<HeroImage {...this.state} {...this.props}/>
				<ResultList {...this.state.raceResult}/>
			</div>
		);
	}
}

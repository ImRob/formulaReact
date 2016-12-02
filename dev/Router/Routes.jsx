import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRedirect} from 'react-router';
import {RaceResults} from '../Components/RaceResults.jsx'
import {ResultList} from '../Components/ResultList.jsx'
import {CircuitInfo} from '../Components/NotFound.jsx'

import {NotFound} from '../Components/NotFound.jsx'

const Routes=()=>{
	return (
		<Router history={browserHistory}>
			<Route path="/" component={RaceResults}>
				<Route path=":raceId"/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
	)
}

export default Routes
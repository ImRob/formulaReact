import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import {HeroImage} from './Components/HeroImage.jsx'
import {RaceResults} from './Components/RaceResults.jsx'
import {Router} from 'react-router'
import Routes from './Router/Routes'

// export class App extends Component {
// 	render() {
// 		return (
// 			<Routes/>
// 		);
// 	}
// }


ReactDOM.render(<Routes/>,document.getElementById('app'))
import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		};
		// console.log('1->','constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({ robots: users })});
		// console.log('2->','componentDidMount')
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
	}

	render () {
		const { robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot => { // There robot is Object
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		// console.log(filterRobots);
		// console.log('3->','render')
		return (!robots.length) ?
			<h1 className='f3 tc'>Loading</h1> :
			 (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox serachChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
				);
	}
}

export default App;
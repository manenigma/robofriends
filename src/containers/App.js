import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import { setSearchField, requestRobots } from '../action.js'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
		// onRequestRobots: () => requestRobots(dispatch)
	}

}

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	// onSearchChange = (event) => {
	// 	this.setState({ searchField: event.target.value });
	// }

	render () {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filterRobots = robots.filter(robot => { // There robot is Object
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return (isPending) ?
			<h1 className='f3 tc'>Loading</h1> :
			 (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox serachChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
				);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import AppNavbar from './components/layout/AppNavbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<AppNavbar />
					<h1>Hello World!</h1>
				</div>
			</Router>
		);
	}
}

export default App;

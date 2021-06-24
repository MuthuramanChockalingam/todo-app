import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import TaskPane from './components/taskPane';
import Ticker from './services/ticker.js';
import context from './core/context';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;

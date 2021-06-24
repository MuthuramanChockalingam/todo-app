import config from './config';

const seed = {
	input: '',
	todos: [],
	count: config.countStart,
	filter: 'All',
	editing: null,
	tasks: [],
	theme: config.themes[0],
};

export default seed;

import todoInput from './todoInput.js';
import todoList from './todoList.js';
import toggleAll from './toggleAlltodos.js';
import clearCompleted from './clearCompleted.js';
import filterBar from './filterBar.js';
import actionButton from './actionButton.js';

const TodoPane = () => {

	return (
	<div className='todoPane'>
		<div>
			<h3 className='todo-header'>TodoApp</h3>
			{toggleAll()}
			{todoInput()}
			<span>{actionButton()}</span>
		</div>
		<div>Todos: {todoList() }</div>
		<div>{ clearCompleted() }</div>
		<div>{ filterBar() }</div>
	</div>
	);
};

export default TodoPane;

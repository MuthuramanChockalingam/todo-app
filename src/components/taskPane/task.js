import context from '../../core/context';
import { React } from 'react';
import '../../App.css';

const removeButton = (task) =>
	<button
		className="closeButton"
		onClick={ () => context.actions.removeTask(task) }
	> </button>;

const addButton = (task) =>
	<button
		className="addButton"
		onClick={ () => {
			context.actions.addTaskTodo(task) ;
			context.actions.removeTask(task);
		} }
	> </button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id } className="task">
		<span>{addButton(task)}</span>
		<span>{text}</span>
		<span>{removeButton(task)}</span>
	</div>;
};

export default Task;

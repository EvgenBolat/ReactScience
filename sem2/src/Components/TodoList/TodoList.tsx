import { useRef } from 'react'
import Task from '../Task/Task';
import task from '../types/task.Type'

interface Props {
	tasks: task[]
	setTasks: (tasks: task[]) => void
}
const TodoList = ({ tasks, setTasks }: Props) => {

	const inputRef = useRef<HTMLInputElement>(null);

	const deleteTask = (task: task) => {
		task.isDeleted = true
		setTasks([...tasks.filter(t => t.title !== task.title), task])
	}

	const changeIsDoneTask = (task: task, isDone: boolean) => {
		task.isDone = isDone
		const indexOfTask = tasks.findIndex(t => t.title === task.title)
		const new_tasks = [...tasks.slice(0, indexOfTask), task, ...tasks.slice(indexOfTask + 1)]
		console.log(new_tasks)
		setTasks([...new_tasks])
	}

	const addTask = () => {
		if(inputRef.current){
			const title = inputRef.current?.value
			setTasks([...tasks, { title: title, isDone: false, isDeleted: false }])
			inputRef.current.value = ''
		}
	}

	return (
		<>
		{tasks.map(task => {
		if (!task) {
			return null
		}
		return (
				<Task key={task.title} task={task} deleteTask={deleteTask} changeIsDoneTask={changeIsDoneTask} />
		)
	})}
	<div>
		<input ref={inputRef} type="text" className="text" />
		<button onClick={() => addTask()}>Добавить</button>
	</div>
	</>)
}

export default TodoList

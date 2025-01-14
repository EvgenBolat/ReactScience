import task from '../types/task.Type';
import styles from './Task.module.css'

interface Props {
	task: task
	deleteTask: (task: task) => void
	changeIsDoneTask: (task: task, isDone: boolean) => void
}

const Task = (props: Props) => {
	if (props.task.isDeleted) return null
	return (
		<li className={props.task.isDone ? styles.taskDone : styles.task}>
			<p className=''>{props.task.title}</p>
			<input
				type='checkbox'
				checked={props.task.isDone}
				onChange={() => props.changeIsDoneTask(props.task, !props.task.isDone)}
			/>
			<button onClick={() => props.deleteTask(props.task)} className='btn'>Удалить</button>
		</li>
	)
}

export default Task

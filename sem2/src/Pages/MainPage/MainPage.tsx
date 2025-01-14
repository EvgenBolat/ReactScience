import { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import TodoList from '../../Components/TodoList/TodoList'
import task from '../../Components/types/task.Type'


const MainPage = () => {
	const [tasks, setTasks] = useState<task[]>([
		{
			title: 'Buy milk',
			isDone: true,
			isDeleted: false,
		},
		{
			title: 'Buy bread',
			isDone: false,
			isDeleted: false,
		},
		{
			title: 'Buy meat',
			isDone: false,
			isDeleted: false,
		},
	])
	return (
		<>
			<Header title='TODO list' />
			<TodoList tasks={tasks} setTasks={setTasks} />
			<Footer />
		</>
	)
}

export default MainPage

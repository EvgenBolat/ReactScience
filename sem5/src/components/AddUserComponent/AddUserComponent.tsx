import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddUserComponent = () => {
	const [name, setName] = useState('')
	const [age, setAge] = useState(1)
	const dispatch = useDispatch()

	const inputStyles = {
		border: '1px solid black',
		padding: '5px',
		margin: '5px',
		borderRadius: '5px',
	}
	return (
		<div
			style={{
				marginTop: '20px',
			}}
		>
			<h1>Add User</h1>
			<input
				style={inputStyles}
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				style={inputStyles}
				type='number'
				min={1}
				max={150}
				value={age}
				onChange={e => setAge(Number(e.target.value))}
			/>
			<button
				style={{
					border: '1px solid black',
					padding: '5px',
					margin: '5px',
					borderRadius: '5px',
				}}
				onClick={() => {
					dispatch({ type: 'users/addUser', payload: { name, age } })
					setName('')
					setAge(1)
				}}
			>
				Add
			</button>
		</div>
	)
}

export default AddUserComponent

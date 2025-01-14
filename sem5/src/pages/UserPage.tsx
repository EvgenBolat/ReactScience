import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../store/Store'

const UserPage = () => {
	const { name } = useParams()

	const dispatch = useDispatch()

	const user = useSelector((state: RootState) =>
		state.users.users.find(user => user.name === name)
	)

	const [nameInput, setName] = useState('')
	return (
		<div>
			<h1>User Page</h1>
			{user && <h1>{user.name}</h1>}
			{user && <h1>{user.age}</h1>}
			<input value={nameInput} onChange={e => setName(e.target.value)} />
			<button
				onClick={() =>
					dispatch({
						type: 'users/changeName',
						payload: { oldName: name, newName: nameInput },
					})
				}
			>
				Изменить имя
			</button>
		</div>
	)
}

export default UserPage

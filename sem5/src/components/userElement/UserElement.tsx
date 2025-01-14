import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { User } from '../../types/User'

interface Props {
	user: User
}
const UserElement = ({ user }: Props) => {
	const { name, age } = user
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onDelete = () => {
		dispatch({ type: 'users/removeUser', payload: name })
	}
	return (
		<div
			onClick={() => navigate(`/user/${name}`)}
			style={{
				border: '1px solid black',
				borderRadius: '15px',
				padding: '15px',
			}}
		>
			<h1>Имя: {name}</h1>
			<p>Возраст {age}</p>
			<button onClick={onDelete}>Удалить</button>
		</div>
	)
}

export default UserElement

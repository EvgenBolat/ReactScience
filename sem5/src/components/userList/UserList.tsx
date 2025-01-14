import { User } from '../../types/User'
import UserElement from '../userElement/UserElement'

interface Props {
	users: User[]
}
const UserList = ({ users }: Props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			{users.map(user => (
				<UserElement key={user.name} user={user} />
			))}
		</div>
	)
}

export default UserList

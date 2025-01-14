import { useSelector } from 'react-redux'
import AddUserComponent from '../components/AddUserComponent/AddUserComponent'
import UserList from '../components/userList/UserList'
import { RootState } from '../store/Store'

const MainPage = () => {
	const users = useSelector((state: RootState) => state.users.users)
	return (
		<div>
			<h1>Main Page</h1>
			<AddUserComponent />
			<UserList users={users} />
		</div>
	)
}

export default MainPage

import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/User'

export interface usersState {
	users: User[]
}

const initialState: usersState = {
	users: [],
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.users.push(action.payload)
		},
		removeUser: (state, action) => {
			state.users = state.users.filter(user => user.name !== action.payload)
		},
		changeName: (state, action) => {
			state.users = state.users.map(user => {
				if (user.name === action.payload.oldName) {
					user.name = action.payload.newName
				}
				return user
			})
		},
	},
})

export const { addUser, removeUser, changeName } = usersSlice.actions
export default usersSlice.reducer

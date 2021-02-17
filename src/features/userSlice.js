import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		active_sub: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		subscribed: (state, action) => {
			state.active_sub = action.payload;
		},
	},
});

export const { login, logout, subscribed } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectUser = (state) => state.user.user;
export const selectSub = (state) => state.user.active_sub;

export default userSlice.reducer;

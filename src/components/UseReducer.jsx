import { useReducer } from 'react';

function UseReducer() {
	const initialValue = {
		username: '',
		password: '',
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'set_username':
				return { ...state, username: action.payload };
			case 'set_password':
				return { ...state, password: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialValue);

	return (
		<>
			<h1>login input</h1>
			<input
				type='text'
				onChange={e => {
					dispatch({ type: 'set_username', payload: e.target.value });
				}}
			/>
			<p>{state.username}</p>
			<hr />
			<h1>password</h1>
			<input
				type='text'
				onChange={e => {
					dispatch({ type: 'set_password', payload: e.target.value });
				}}
			/>
			<p>{state.password}</p>
		</>
	);
}

export default UseReducer;

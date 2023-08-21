import React from 'react'
import * as userService from './services/userService'
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css'
import UserList from './components/UserList';
import Pagination from './components/Pagination';

function App() {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		userService.getAll()
			.then(users => setUsers(users))
			.catch(err => console.log(`Error` + err));
	}, []);

	const onUserCreateSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData)

		const createdUser = await userService.create(data);

		setUsers(state => [...state, createdUser])
	}

	const onUserDelete = async (id) => {
		await userService.deleteUser(id);
		setUsers(state => state.filter(x => x._id !== id));
	};
	const onUserUpdateSubmit = async (e, id) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData)
		const updatedUser = await userService.update(id, data);
		// console.log(users.filter(x => x._id === id ));
		setUsers(state => state.map(x => x._id === id ? updatedUser : x))
	}

	return (
		<>
			<Header />

			<main className='main'>

				<section className="card users-container">

					<Search />

					<UserList 
						users={users} 
						onUserCreateSubmit={onUserCreateSubmit} 
						onUserDelete={onUserDelete}
						onUserUpdateSubmit={onUserUpdateSubmit} />

					<Pagination />

				</section>

			</main>

			<Footer />
		</>
	);
}

export default App;

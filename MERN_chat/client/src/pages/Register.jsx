import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [pageTable, setPageTable] = useState("Register");
	const { setUsername: setLoggedUserName, setId } = useContext(UserContext);

	async function handleSubmit(event) {
		event.preventDefault();

		const url = pageTable == "Register" ? "/register" : "/login";

		axios
			.post(url, {
				username: username,
				password: password,
			})
			.then((response) => {
				let { id } = response.data;
				setId(id);
			})
			.catch((error) => {
				console.log(error);
			});
		setLoggedUserName(username);
		// setId(id);
	}
	return (
		<div className="flex h-screen  items-center justify-center bg-blue-50">
			<form
				action=""
				className="mx-au flex w-64 flex-col space-y-2"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="block rounded-md p-2"
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="block rounded-md p-2"
					placeholder="Password"
				/>
				<button
					type="submit"
					className="block rounded-lg border-2 border-blue-500 bg-blue-300 px-2 py-1.5 text-white"
				>
					{pageTable}
				</button>
				{pageTable == "Register" ? (
					<div className="mt-2" onClick={() => setPageTable("Login")}>
						have access to login
					</div>
				) : (
					<div className="mt-2" onClick={() => setPageTable("Register")}>
						no access to register
					</div>
				)}
			</form>
		</div>
	);
};

export default Register;

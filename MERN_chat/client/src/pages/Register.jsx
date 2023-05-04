import React, { useState } from "react";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="flex h-screen  items-center justify-center bg-blue-50">
			<form action="" className="mx-au flex w-64 flex-col space-y-2">
				<input
					type="text"
					name="username"
					id=""
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="block rounded-md p-2"
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					id=""
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="block rounded-md p-2"
					placeholder="Password"
				/>
				<button
					type="submit"
					className="block rounded-lg border-2 border-blue-500 bg-blue-300 px-2 py-1.5 text-white"
				>
					Register
				</button>
				<p>
					username: {username}/ password: {password}
				</p>
			</form>
		</div>
	);
};

export default Register;

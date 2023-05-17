import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import Register from "./Register";

function Login() {
	const { username } = useContext(UserContext);
	if (username) {
		return `login: ${username} `;
	}
	return <Register />;
}

export default Login;

//  UserContextProvider

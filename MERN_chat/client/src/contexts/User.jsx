import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [username, setUsername] = useState(null);
	const [id, setId] = useState(null);

	useEffect(() => {
		axios
			.get("/profile")
			.then((response) => {
				setUsername(response.data.userName);
				setId(response.data.userID);
			})
			.catch((error) => {
				throw error;
			});
	}, [id]);

	return (
		// 把值 传给  UserContext 的空对象
		<UserContext.Provider value={{ username, setUsername, id, setId }}>
			当前context{username} & {id}
			{children}
		</UserContext.Provider>
	);
}

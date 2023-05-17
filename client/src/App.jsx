import { UserContextProvider } from "./contexts/User";
import Login from "./pages/Login";
import axios from "axios";
function App() {
	axios.defaults.baseURL = "http://localhost:8080";
	// 跨域传递cookie
	axios.defaults.withCredentials = true;

	return (
		<div className="bg-red-200">
			<UserContextProvider>
				<Login />
			</UserContextProvider>
		</div>
	);
}

export default App;

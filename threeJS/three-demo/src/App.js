import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { Drei, BasicGeometry, Debug, EnvAndStaging } from "./pages";
import * as React from "react";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
		},
		{
			path: "/01",
			element: <BasicGeometry />,
		},
		{
			path: "/02",
			element: <Drei />,
		},
		{
			path: "/03",
			element: <Debug />,
		},
		{
			path: "/04",
			element: <EnvAndStaging />,
		},
	]);
	return (
		<>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</>
	);
}

export default App;

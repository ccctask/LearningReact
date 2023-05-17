import CanvasModule from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
function App() {
	return (
		<main>
			<Home></Home>
			<CanvasModule></CanvasModule>
			<Customizer></Customizer>
		</main>
	);
}

export default App;

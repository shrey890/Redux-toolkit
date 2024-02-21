import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import NoPageFound from "./pages/NoPageFound";
function App() {
	return (
		<>
    <Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NoPageFound />} />
			</Routes>
		</>
	);
}
export default App;

import { Link } from "react-router-dom";
import './navbar.css'
import { useSelector } from "react-redux";
const Navbar = () => {
    const items = useSelector((state)=>state.cart)
	return (
		<div className="links">
        <span>Redux Toolkit Store</span>
			<nav className="links2">
                <Link to='/'>Home</Link>
                <Link to='cart'>Cart</Link>
            </nav>
            <span className="cart-items">Cart : <b style={{fontWeight:'bolder' , color:'black'}}> {items.length} </b></span>
		</div>
	);
};
export default Navbar;

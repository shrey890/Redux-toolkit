import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handelRemove = (productId) => {
		dispatch(remove(productId));
	};
	return (
		<div>
			<h3>Cart</h3>
			{products.map((product) => (
				<div key={product.id} className="cart-card">
					<img src={product.image} alt={product.name} />
					<h3>{product.title}</h3>
					<h2>{product.price}</h2>
					<button onClick={() => handelRemove(product.id)} className="button-85">
						Remove
					</button>
				</div>
			))}
		</div>
	);
};
export default Cart;

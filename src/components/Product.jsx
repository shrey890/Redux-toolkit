import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Product = () => {
    const dispatch = useDispatch()
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch(`https://fakestoreapi.com/products/`);
			const data = await res.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);
    const handleAdd = (product)=>{
dispatch(add(product))
    }
	return (
		<div className="productsWrapper"> 
			{products.map((product) => (
				<div className="card" key={product.id}>
					<img src={product.image} alt={product.title} />
                    <h4>{product.title.slice(0,20)}</h4>
                    <h5>${Math.ceil(product.price)}</h5>
                  <button onClick={()=>handleAdd(product)} className="button-85">Add to Cart</button>
				</div>
			))}
		</div>
	);
};
export default Product;

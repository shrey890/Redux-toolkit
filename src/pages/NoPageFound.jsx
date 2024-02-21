import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
	return (
		<div>
			<h1> 404; Page not found. The page you are looking for was not found. </h1>
			<Link className="button-85" to="/"> back to home</Link>
		</div>
	);
};

export default NoPageFound;

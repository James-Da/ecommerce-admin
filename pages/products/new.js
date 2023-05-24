import Layout from "@/components/Layout";
import React from "react";
import { useState } from "react";
import axios from "axios";

const NewProduct = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	const createProduct = async (e) => {
		e.preventDefault();
		const data = { title, description, price };
		await axios.post("http://localhost:3000/api/products", data);
	};

	return (
		<Layout>
			<form onSubmit={(e) => createProduct(e)} className="flex flex-col">
				<h1>New Product</h1>

				<label htmlFor="">Product name</label>
				<input
					type="text"
					placeholder="product name"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="">Description</label>
				<textarea
					placeholder="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>

				<label htmlFor="">Price (in USD)</label>
				<input
					type="number"
					placeholder="price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<button type="submit" className="btn-primary">
					Save
				</button>
			</form>
		</Layout>
	);
};

export default NewProduct;

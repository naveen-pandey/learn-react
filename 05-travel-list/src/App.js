import { useState } from "react";

export default function App() {
	const [items, setItems] = useState([]);
	function handleAdditems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
		// delete item from items array using filter method which returns a new array with all items except the one with the given id
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
		// update the packed property of the item with the given id
	}

	return (
		<div className="App">
			<Logo />
			<Form onAdditems={handleAdditems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
			/>
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1> 🏝️ Far Away 🧳</h1>;
}

function Form({ onAdditems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(event);
		if (!description) return;
		const newItem = { id: Date.now(), description, quantity, packed: false };
		console.log(newItem);

		onAdditems(newItem);

		// update state with new item
		setDescription("");
		setQuantity(1);
	}

	return (
		<form
			className="add-form"
			onSubmit={handleSubmit}>
			<h3>What do you need for your trip? 😍</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}>
				{" "}
				{/* e.target.value is string so we need to convert it to number */}
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option
						value={num}
						key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						key={item.id}
            onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
}

function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.description} ({item.quantity})
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			<em>💼 You have X items on your list. and you already packed X (X%)</em>
		</footer>
	);
}

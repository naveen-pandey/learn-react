import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	// component name starts with uppercase and should return some markup
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	// const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
	const style = {};
	return (
		<header className="header">
			<h1 style={style}>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const numPizzas = pizzas.length;
	return (
		<menu className="menu">
			<h2>Our Menu</h2>
            {/* <> is <React.Fragment>, we can also use like <React.Fragment key="dskjfs"> */}
			{numPizzas > 0 ? (
				<>

					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven, all organic, all delicious.
					</p>
					<ul className="pizzas">
						{pizzas.map((pizza) => (
							<Pizza
								pizzaObj={pizza}
								key={pizza.name}
							/>
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later :) </p>
			)}

			{/* <Pizza
				name="Pizza Spinaci"
				ingredient="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="pizzas/spinaci.jpg"
				price={10}
			/>
			<Pizza
				name="Pizza Funghi"
				ingredient="Tomato, mozarella, mushrooms, and onion"
				price={12} // order which we pass in the props is irrelevant
				photoName="pizzas/funghi.jpg"
			/> */}
		</menu>
	);
}

function Pizza({ pizzaObj }) {
	//destructuring prop name, pizzaObj name should exactly match the prop passed
	console.log(pizzaObj);

	if (pizzaObj.soldOut) return null;

	return (
		<li className="pizza">
			<img
				src={pizzaObj.photoName}
				alt={pizzaObj.name}
			/>
			<div className="">
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	// if(hour >= openHour && hour <= closeHour)
	//     alert("We're currently open");
	// else
	//     alert("Sorry we're closed");

	// if(!isOpen) return <p>ClOSED</p>;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order
					closeHours={closeHour}
					openHours={openHour}
				/>
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
	// return React.createElement('footer',null, "We're currently open");
}

function Order({ closeHours, openHours }) {
	//destructuring multiple props coming
	return (
		<div className="order">
			<p>
				We're open from {openHours}:00 to {closeHours}:00. Come visit us or
				order online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
